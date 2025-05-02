import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import meditatingImage from '../assets/img/meditating.png';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, like validating inputs or calling an API
    console.log('Form submitted', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-white flex flex-col justify-center items-center px-6 relative">
      {/* Header */}
      <div className="absolute top-4 left-6">
  <Link to="/" className="font-semibold text-[20px] leading-[35px] tracking-tight text-center" 
        style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(117, 105, 187, 1)' }}>
    SMARTSPHERE
  </Link>
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

      
      {/* Login Box with Boundary */}
      <div className="relative w-full max-w-md md:max-w-xl bg-gray-100 rounded-3xl shadow-md px-8 pt-32 pb-10 mt-20">
        {/* Meditating Logo placed at the edge of the box */}
        <img
          src={meditatingImage}
          alt="Meditating Image"
          className="absolute top-[-60px] left-36 w-72 h-36 z-10"
        />


        {/* Content inside the login box */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-1">Welcome Back !!</h2>
          <p className="text-sm text-gray-500 mb-6">Please Sign In To Your Account</p>
        </div>
      
      {/* Login Card */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              id="toggle-icon"
              className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.5 12c1.274 4.057 5.065 6.75 9.543 6.75 1.598 0 3.104-.37 4.446-1.03m2.742-2.052A10.45 10.45 0 0022.5 12c-1.274-4.057-5.065-6.75-9.543-6.75-1.206 0-2.364.214-3.432.606"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="text-right text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full py-3 text-lg"
            style={{ backgroundColor: 'rgba(117, 105, 187, 1)' }}
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          New User?{' '}
          <Link to="/register" className="text-purple-600 font-medium">
            create an account?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
