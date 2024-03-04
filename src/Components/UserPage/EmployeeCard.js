// EmployeeCard.js

import React from 'react';
import './EmployeeCard.css'; // Import CSS file for styling

const EmployeeCard = ({ empId, name, dob, role, cardNumber }) => {
  return (
    <div className={`employee-card ${cardNumber % 2 === 0 ? 'even' : 'odd'}`}>
      <div className="emp-id-badge">{empId}</div>

      <div className="info-row"><span className='equal'>EMP ID:</span> {empId}</div>
      <div className="info-row"><span className='equal'>Name:</span> {name}</div>
      <div className="info-row"><span className='equal'>DOB:</span> <span className='dob'>{dob}</span></div>
      <div className="info-row"><span className='equal'>Role:</span> <span className='role'>{role}</span></div>
    </div>
  );
};

export default EmployeeCard;
