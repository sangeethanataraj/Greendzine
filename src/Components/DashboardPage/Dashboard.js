// Dashboard.js

import React, { useState } from 'react';
import pageIcon from '../UserPage/icon2.png';
import iconImage from '../UserPage/icon3.png';
import './Dashboard.css';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [productivityData, setProductivityData] = useState([
    { day: 'Monday', productivity: 0.8 },
    { day: 'Tuesday', productivity: 0.6 },
    { day: 'Wednesday', productivity: 0.7 },
    { day: 'Thursday', productivity: 0.5 },
    { day: 'Friday', productivity: 0.9 },
    { day: 'Saturday', productivity: 0.7 },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search functionality here
  };

  return (
    <div className='Dashboard-container'>
      <div className='user-icon'>
        <img src={iconImage} alt="Icon" />
      </div>
      <div className="dashboard-content">
        <div className="search-bar">
          <img src={pageIcon} alt="Icon" className="page-icon" />
        </div>
        <div className="productivity-section">
          <div className="section-title">Employee Productivity Data</div>
          {productivityData.map((item) => (
            <div key={item.day} className="productivity-item">
              <div className='productivity-content'>
                <div className='productivity-day'>{`Productivity of ${item.day}`}</div>
                <div className="productivity-percentage">{`${Math.round(item.productivity * 100)}%`}</div>
              </div>
              <div className="productivity-bar" style={{ width: `${item.productivity * 80}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Dashboard;