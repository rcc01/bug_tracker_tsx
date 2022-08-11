import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import Tickets from './components/Tickets/Tickets';
import Customers from './components/Customers/Customers';
import Calendar from './components/Calendar/Calendar';
import Kanban from './components/Kanban/Kanban';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <Routes>
        {/* Introduced RecoilRoot here - should I only put recoilRoot for Kanban????*/}

        <Route path='/' element={<App />} />
        <Route path='register' element={<SignupForm />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='tickets' element={<Tickets />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='kanban' element={<Kanban />} />
        <Route path='customers' element={<Customers />} />
      </Routes>
    </RecoilRoot>
  </Router>,
  document.getElementById('root') as HTMLElement
);
