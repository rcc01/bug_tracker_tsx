import React from 'react';
import MainDash from '../MainDash/MainDash';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass'>
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
};

export default Dashboard;
