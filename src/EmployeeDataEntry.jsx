import React, { useState } from 'react';
import { db, storage } from './FirebaseConfig'; // Adjust this import according to your project structure
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmployeeDataEntry = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [toggleButton, setToggleButton] = useState(false);
  const [buttonText, setButtonText] = useState('Proceed');
  const [photoPreview, setPhotoPreview] = useState(null);

  const navigate = useNavigate()

  const [imgUrl, setImgUrl] = useState('');

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile);
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      console.log(`THE IMG URL IS : ${previewUrl}`);
      setPhotoPreview(previewUrl);
    } else {
      setPhotoPreview(null); // Reset the preview if no file is selected
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText('Proceeding...'); // Update button text
    setToggleButton(false); // Reset toggle button state

    try {
      // 1. Upload photo to Firebase Storage
      const photoRef = ref(storage, `employee_photos/${photo.name}`);
      await uploadBytes(photoRef, photo); // Upload photo

      // 2. Get photo URL after upload
      const photoURL = await getDownloadURL(photoRef);

      setImgUrl(photoURL)

      // 3. Store employee details in Firestore
      const docRef = await addDoc(collection(db, 'eDetails'), {
        name,
        phone,
        email,
        photoURL,
      });

      const docId = docRef.id; 

      console.log(photo);
      localStorage.setItem('photoUrl', photoPreview);

      navigate(`/e-Card/${name}/${phone}/${email}/${docId}`);

    } catch (error) {
      console.error("Error uploading photo or saving data:", error);
      alert("Error uploading data. Please try again.");
      setButtonText('Proceed'); // Reset button text in case of an error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">Enter Your Details</h2>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="photo">
              Upload Your Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDataEntry;
