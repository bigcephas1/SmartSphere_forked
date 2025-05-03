import React from 'react';
import { Link } from 'react-router-dom'; // For linking to the Login page
import envelopeIcon from '../assets/img/EnvelopeOpen.png'; // Import the image

function EmailVerify() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-white flex flex-col justify-center items-center px-6 relative text-center">
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

      {/* Email Verification Notice */}
      <div className="flex flex-col items-center justify-center space-y-6 mt-10">
        <img src={envelopeIcon} alt="Envelope Icon" className="w-36 h-36" />
        <h1 className="text-2xl font-semibold">Verify Your Email</h1>
        <p className="max-w-fit text-sm text-gray-600">
          Thank you for registering! To complete the process, please check your email for a verification link.
          <br />
          <span className="whitespace-nowrap">
            Click on the link to confirm your email address.
          </span>
        </p>
        <Link
          to="/login" // Assuming you're using React Router to handle login navigation
          className="mt-4 inline-block text-white font-medium rounded-full px-10 py-3 text-lg"
          style={{ backgroundColor: 'rgba(117, 105, 187, 1)' }}
        >
          Proceed to Login
        </Link>
      </div>
    </div>
  );
}

export default EmailVerify;
