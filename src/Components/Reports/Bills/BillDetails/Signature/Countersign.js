import React from 'react';
import "./Account.css";
const Countersign = () => {
    return (
        <div className="basis-1/3 countermargin signature ">
            
        <h3 className="sign-margin">
          <u>COUNTERSIGNED</u>
        </h3>
        <ul>
        <li className='mb-5'>Sign </li>
          <li>Name </li>
          <li>Designation</li>
          <li>Appointment</li>
          <li>Office</li>
          <li>Date</li>
        </ul>
      </div>
    );
};

export default Countersign;