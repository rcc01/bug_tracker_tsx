import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import Customers from './components/Customers/Customers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='register' element={<SignupForm />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='orders' element={<Orders />} />
      <Route path='customers' element={<Customers />} />
    </Routes>
  </Router>
);
