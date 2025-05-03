import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './pages/landingPage';
import Register from './pages/register';
import LoginEmail from './pages/login-email-verify'; // Import the Login component
import Login from './pages/login';
import './index.css';
import VerifySuccess from './pages/verification-success';
import EmailVerify from './pages/email-verify';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the LandingPage page */}
        <Route path='/' element={<LandingPage />} />

        {/* Route for the LoginEmail page */}
        <Route path='/login-email-verify' element={<LoginEmail />} />

        {/* Route for the Register page */}
        <Route path="/register" element={<Register />} />
        
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the VerifySuccess page */}
        <Route path='/verification-success' element={<VerifySuccess />}/>

        {/* Route for the EmailVerify page */}
        <Route path='/email-verify' element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
