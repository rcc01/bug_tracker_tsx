import React from 'react';
import './Customers.css';
import Sidebar from '../Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';

const Customers = () => {
  return (
    <div className='dashboard-div-customers'>
      <div className='dashboard-glass-customers'>
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
};

export default Customers;
