import React, { useRef, useState } from 'react';
import { QRCode } from 'react-qr-code';
import html2pdf from 'html2pdf.js';  // Import html2pdf.js
import { useParams,useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Make sure the path is correct

const EmployeeCard = () => {
  const navigation = useNavigate()
  const { empName, empPhone, empEmail,DocId } = useParams();
  const img = localStorage.getItem('photoUrl');
  const cardRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false); // State to track PDF generation
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleDownloadPDF = () => {
    const element = cardRef.current;
    const options = {
      margin: 0,
      filename: `${empName}-EmployeeCard.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'px', format: [380, 590], orientation: 'portrait' },
    };

    setIsGeneratingPDF(true); // Set state to indicate PDF is being generated

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        setIsGeneratingPDF(false); // Reset state after PDF generation
      });
      setTimeout(() => {
        navigation('/join')
      }, [1000]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Employee Card */}
      <div ref={cardRef} className="w-96 p-6 bg-white rounded-lg shadow-lg border border-gray-200 text-center">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img
            src={logo} // Logo image
            alt="Company Logo"
            className="w-20 h-10 rounded-full mb-4" // Adjust width/height as needed
          />
        </div>

        <div className="flex justify-center mb-4">
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
            src={img} // Employee image
            alt="Employee"
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        
        <h2 className="text-xl font-bold">{empName}</h2>
        <div className="text-gray-600 mt-2">
          <p>{empPhone}</p>
          <p>{empEmail}</p>
        </div>
        
        <div className="flex justify-center mt-4">
          <QRCode value={DocId}/>
        </div>

        {/* Responsive Download PDF Button */}
        {!isGeneratingPDF && imgLoaded &&( // Render button only if not generating PDF
          <div className="mt-6">
            <button
              onClick={handleDownloadPDF}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Download E-Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
