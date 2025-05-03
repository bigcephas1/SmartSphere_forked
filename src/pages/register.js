import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import meditatingImage from '../assets/img/meditating.png';

function Register() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., validation and API call)
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-white to-green-50">
      {/* Header */}
      <div className="flex justify-between items-center px-10 py-4">
        <Link to="/" className="font-semibold text-[20px] leading-[35px] tracking-tight text-center" 
                style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(117, 105, 187, 1)' }}>
            SMARTSPHERE
          </Link>
        <select className="bg-gray-100 border border-gray-400 rounded-full px-4 py-1 text-sm">
          <option>English</option>
          <option>Arabic</option>
          <option>French</option>
          <option>Idioma Portugues</option>
        </select>
      </div>

      <div className="w-full px-6 md:px-10 flex flex-col md:flex-row">
        {/* Left side */}
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Complete the form to get started</p>
          <img src={meditatingImage} alt="Meditating Illustration" className="max-w-sm" />
          <p className="mt-6 text-lg text-center text-gray-700">
            Do you have an account?{' '}
            <Link to="/login" className="text-purple-600 font-semibold text-lg" style={{ color: 'rgba(117, 105, 187, 1)' }}>
              Login here
            </Link>
          </p>
        </div>

        {/* Registration Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <p className="text-lg text-center text-gray-800 font-bold mb-6">Make your work easier and organized today</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Other names"
              className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
              value={otherNames}
              onChange={(e) => setOtherNames(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create your password"
              className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="flex items-center text-xs mt-2">
              <input
                type="checkbox"
                id="consent"
                className="mr-2"
                checked={consent}
                onChange={() => setConsent(!consent)}
              />
              <label htmlFor="consent">
                By clicking Create Account you agree to our consent clause for{' '}
                <span className="text-red-600">Data Collection and Privacy Policy</span>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 font-semibold text-lg"
              style={{ backgroundColor: 'rgba(117, 105, 187, 1)' }}
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
