import React from 'react';
import MainDash from '../MainDash/MainDash';
import Sidebar from '../Sidebar/Sidebar';
import './Orders.css';

const Orders = () => {
  return (
    <div className='dashboard-div-orders'>
      <div className='dashboard-glass-orders'>
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
};

export default Orders;
