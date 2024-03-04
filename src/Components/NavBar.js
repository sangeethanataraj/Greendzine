import React, { useState } from 'react';
import Dashboard from './DashboardPage/Dashboard';
import UserPage from './UserPage/UserPage';
import './NavBar.css';
import homeIcon from './home.png'; // Import the home icon image file
import userIcon from './user.png'; // Import the user icon image file

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard' or 'userPage'

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'userPage' && <UserPage />}
      <div className="navbar">
        <div className="navbar-icons">
          <img
            src={homeIcon} // Use the home icon image
            alt="Home"
            onClick={() => handleNavClick('dashboard')}
            className={`navbar-icon ${currentPage === 'dashboard' ? 'selected' : ''}`}
          />
          <img
            src={userIcon} // Use the user icon image
            alt="User"
            onClick={() => handleNavClick('userPage')}
            className={`navbar-icon ${currentPage === 'userPage' ? 'selected' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
