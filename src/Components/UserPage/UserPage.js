// UserPage.js

import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import './UserPage.css';
import pageIcon from './icon2.png';
import iconImage from './icon3.png';
import searchIcon from './SearchIcon.png';

const UserPage = () => {
  const [employeeData] = useState([
    { empId: 1, name: 'John Doe', dob: '1990-05-15', role: 'Developer' },
    { empId: 2, name: 'Jane Smith', dob: '1985-09-21', role: 'Manager' },
    { empId: 3, name: 'Alice Johnson', dob: '1993-12-08', role: 'Designer' },
    { empId: 4, name: 'Bob Brown', dob: '1988-03-25', role: 'Tester' },
    { empId: 5, name: 'Eva Williams', dob: '1995-07-11', role: 'Analyst' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employeeData.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='user-page-container'>
      <div className='user-icon'>
        <img src={iconImage} alt="Icon" />
      </div>
      <div className='page-content'>
        <div className='page-icon'>
          <img src={pageIcon} alt="Icon" />
        </div>
        <div className='search-container'>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search with name"
          />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
      {filteredEmployees.map(employee => (
        <EmployeeCard key={employee.empId} {...employee} />
      ))}
    </div>
  );
};

export default UserPage;
