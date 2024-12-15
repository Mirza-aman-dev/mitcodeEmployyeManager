import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import sales from './assets/sales.jpg';
import logo from './assets/mitcode.png';

const JobPost = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleApply = () => {
        navigate('/apply-for-sales');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 via-blue-100 to-blue-300 p-4">
            {/* Container with margin */}
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl w-full mx-4 sm:mx-8 lg:mx-16 mb-8">

                {/* Illustration Section */}
                <div className="mb-6 flex justify-center">
                    <img
                        src={logo}
                        alt="Sales Person Illustration"
                        className="w-48 h-48 rounded-full"
                    />
                </div>

                {/* Heading with Gradient Background */}
                <h1 className="text-3xl font-semibold text-center mb-4 bg-gradient-to-r from-red-400 to-blue-500 text-transparent bg-clip-text px-4 sm:px-6 lg:px-8">
                    Become a sales person and earn through MITCode
                </h1>

                {/* Job Description */}
                <p className="text-md text-gray-600 mb-6 text-left px-4 md:px-0 leading-relaxed bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                    Join our team at MITCode to help us expand our client base and grow the business.
                    You’ll be working with a dynamic team and have the opportunity to earn significant commissions
                    based on your performance. We value creativity, hard work, and dedication.
                </p>

                <p className="text-md text-gray-600 mb-6 text-left px-4 md:px-0 leading-relaxed bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text">
                    ഞങ്ങളുടെ ക്ലയൻ്റ് ബേസ് വികസിപ്പിക്കാനും ബിസിനസ്സ് വളർത്താനും ഞങ്ങളെ സഹായിക്കുന്നതിന് MITCode-ൽ ഞങ്ങളുടെ ടീമിൽ ചേരുക.
                    നിങ്ങൾ ഒരു ഡൈനാമിക് ടീമിനൊപ്പം പ്രവർത്തിക്കുകയും നിങ്ങളുടെ പ്രകടനത്തെ അടിസ്ഥാനമാക്കി കാര്യമായ കമ്മീഷനുകൾ നേടാനുള്ള അവസരവുമുണ്ട്.
                    സർഗ്ഗാത്മകത, കഠിനാധ്വാനം, സമർപ്പണം എന്നിവയെ ഞങ്ങൾ വിലമതിക്കുന്നു.
                </p>

                {/* Job Conditions */}
                <div className="mb-6 text-md">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4 bg-gradient-to-r from-red-400 to-blue-500 text-transparent bg-clip-text">Job Conditions:</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text">
                        <li>Flexible working hours</li>
                        <li>Commission-based salary</li>
                        <li>Prior sales experience is a plus</li>
                        <li>Good communication skills required</li>
                        <li>Teamwork and self-management abilities</li>
                    </ul>
                </div>

                {/* Terms Section */}
                <div className="mb-6 text-md">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4 bg-gradient-to-r from-red-400 to-blue-500 text-transparent bg-clip-text">Terms:</h2>
                    <p className="text-gray-600 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
                        By applying for this position, you agree to adhere to MITCode's policies and guidelines. 
                        This includes maintaining confidentiality and respecting the company's intellectual property.
                    </p>
                </div>

                {/* Confirmation Checkbox */}
                <div className="mb-6 flex items-center justify-center">
                    <input
                        type="checkbox"
                        id="confirmation"
                        className="mr-3 w-5 h-5 rounded-lg border-gray-400 checked:bg-blue-500 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label htmlFor="confirmation" className="text-md text-gray-700">
                        I agree to the terms and conditions
                    </label>
                </div>

                {/* Apply Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleApply}
                        disabled={!isChecked}
                        className={`px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors duration-300 ${isChecked
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            }`}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobPost;
