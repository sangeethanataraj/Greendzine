import React from 'react';
import './LoginPage.css'; // Import CSS for styling
import loginIcon from './icon1.png'; // Import the image

const LoginPage = ({ handleLogin }) => {
  return (
    <div className="login-container">
      <div className="login-content">
        {/* Icon */}
        <img src={loginIcon} alt="Icon" className="login-icon" />

        {/* Email and Password Textboxes */}
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        {/* Login Button */}
        <button className="login-button" onClick={handleLogin}>Login</button>

        {/* Forgot Password Link */}
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginPage;