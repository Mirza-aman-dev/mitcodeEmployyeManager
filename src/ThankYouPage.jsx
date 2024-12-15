import React from 'react';
import { useNavigate } from 'react-router-dom';
import successImage from './assets/animation.gif'; // Add your success animation GIF here

const ThankYouPage = () => {
    const navigate = useNavigate();

    const handleWhatsAppJoin = () => {
        // Replace with your WhatsApp group link
        window.open('https://chat.whatsapp.com/DCyDZLVXcdZ6RrVU5PEeQR', '_blank');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-red-100 to-blue-300 p-4">
            {/* Thank You Container */}
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full mx-4 sm:mx-8 lg:mx-16 mb-8 text-center">
                
                {/* Success Image */}
                <div className="mb-6">
                    <img
                        src={successImage}
                        alt="Success Animation"
                        className="w-58 h-48 mx-auto"
                    />
                </div>

                {/* Success Message */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-red-400 to-blue-500 text-transparent bg-clip-text">
                    Thank You!
                </h1>
                <p className="text-md text-gray-600 mb-4 leading-relaxed bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                    Congratulations! You have successfully joined our team as a sales person at MITCode. 
                    We are thrilled to have you onboard and look forward to seeing your contributions to our growth and success.
                </p>
                <p className="text-md text-gray-600 mb-4 leading-relaxed bg-gradient-to-r from-orange-400 to-green-500 text-transparent bg-clip-text">
                    Your skills and talents will be invaluable in helping us expand our client base and drive our business forward. 
                    Please feel free to reach out to your team members as you settle into your new role.
                </p>
                <p className="text-md text-gray-600 mb-6 leading-relaxed bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text">
                    Don’t forget to join our WhatsApp group to stay updated on company news, team activities, and more!
                </p>

                {/* WhatsApp Group Button */}
                <button
                    onClick={handleWhatsAppJoin}
                    className="px-6 py-3 text-lg font-semibold bg-green-600 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-green-700"
                >
                    Join WhatsApp Group
                </button>

                {/* Back to Home Button (optional) */}
                <div className="mt-4">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 text-lg font-semibold bg-gray-300 text-gray-700 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-400"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
