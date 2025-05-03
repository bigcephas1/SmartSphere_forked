import { useState } from 'react';
import { Link } from 'react-router-dom';
import meditatingImage from '../assets/img/meditating.png'
import BackgroundGraphic from '../assets/img/Social media marketing and digital advertising.png'
import GoogleIcon from '../assets/img/Google_Icons.webp';
import FacebookIcon from '../assets/img/Facebook.png';
import AppleIcon from '../assets/img/Apple Logo.png';


const LoginEmail = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-white-50 flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 md:pr-12">
        <h1 className="text-3xl font-bold text-[rgba(117,105,187,1)] text-center">
          Welcome back !!
        </h1>
        <p className="text-gray-600 text-center">
          Simplify your workflow and increase your productivity with SmartSphere
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
          />
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-5 py-3 placeholder-gray-400"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.5 12c1.274 4.057
                  5.065 6.75 9.543 6.75 1.598 0 3.104-.37 4.446-1.03m2.742-2.052A10.45 10.45 0
                  0022.5 12c-1.274-4.057-5.065-6.75-9.543-6.75-1.206 0-2.364.214-3.432.606" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0
                  11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0
                  11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732
                  7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064
                  6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z" />
                </svg>
              )}
            </span>
          </div>

          <div className="text-right text-sm text-gray-500">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full bg-[rgba(117,105,187,1)] hover:bg-[rgba(117,105,187,0.85)] text-white font-semibold rounded-full py-3 text-lg">
            Login
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 my-4">
          <hr className="w-1/4 border-gray-300" />
          <span className="text-sm text-gray-400">Or continue with</span>
          <hr className="w-1/4 border-gray-300" />
        </div>

        <div className="flex justify-center space-x-4">
          <img src={GoogleIcon} alt="Google" className="w-6 h-6 cursor-pointer" />
          <img src={FacebookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer" />
          <img src={AppleIcon} alt="Apple" className="w-6 h-6 cursor-pointer" />
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          Not a member?{' '}
          <Link to="/register" className="text-[rgba(117,105,187,1)] font-medium">
            Register now
          </Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0">
        <div className="bg-blue-50 rounded-3xl p-8 relative w-full max-w-md min-h-full">
          <div className="relative w-full h-auto">
            <img src= {BackgroundGraphic} alt="Background Graphic" className="absolute top-0 left-0 w-full h-auto z-10" />
            <img src= {meditatingImage} alt="Meditating" className="relative z-20 w-full h-auto" />
          </div>

          <div className="absolute top-5 left-5 space-y-2" />

          <div className="bg-white rounded-xl p-5 w-48 shadow-md">
            <h3 className="font-bold text-sm">Item to be Shipped</h3>
            <p className="text-xs text-gray-500">30 Task</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">Progress</span>
              <span className="text-xs font-bold text-[rgba(117,105,187,1)]">90%</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-700 font-semibold">
            Make your work easier and organized with{' '}
            <span className="text-[rgba(117,105,187,1)]">SMARTSPHERE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
