import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router if needed for navigation
import envelopeIcon from '../assets/img/EnvelopeOpen.png';

function VerifySuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-white to-pink-50 flex flex-col justify-center items-center px-6 relative">
      {/* Header */}
      <div className="absolute top-4 left-6">
        <span
          className="font-semibold text-[20px] leading-[35px] tracking-tight text-center"
          style={{ fontFamily: 'Outfit', sansSerif: 'sans-serif', color: 'rgba(117, 105, 187, 1)' }}
        >
          SMARTSPHERE
        </span>
      </div>

      {/* Language Dropdown */}
      <div className="absolute top-4 right-6">
        <select className="bg-gray-100 border border-gray-400 rounded-full px-4 py-1 text-sm">
          <option>English</option>
          <option>Arabic</option>
          <option>French</option>
          <option>Idioma Portugues</option>
        </select>
      </div>

      {/* Email Verification Success Content */}
      <div className="text-center mt-20 scale-110 animate-fade-in">
        <div className="mb-8">
          {/* Envelope Icon */}
          <img src={envelopeIcon} alt="Envelope Icon" className="w-[149px] h-[149px] mx-auto" />
        </div>

        <h2 className="text-2xl font-semibold mb-3">Verify Your Email</h2>
        <p className="text-green-600 text-base">
          Account confirmation successful
          <br />
        </p>

        {/* Button to proceed to login */}
        <Link
          to="/login-email-verify" // Assuming you're using React Router for navigation
          className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-10 py-4 text-lg"
          style={{ backgroundColor: 'rgba(117, 105, 187, 1)' }}
        >
          Proceed to Login
        </Link>
      </div>
    </div>
  );
}

export default VerifySuccess;
