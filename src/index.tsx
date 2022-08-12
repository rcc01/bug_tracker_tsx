import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import Tickets from './components/Tickets/Tickets';
import Employees from './components/Employees/Employees';
import Calendar from './components/Calendar/Calendar';
import Kanban from './components/Kanban/Kanban';
import { RecoilRoot } from 'recoil';
import LoginForm from './components/LoginForm/LoginForm';

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <Routes>
        {/* App or loginForm? in element? use both? */}
        <Route path='/' element={<LoginForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<SignupForm />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='tickets' element={<Tickets />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='kanban' element={<Kanban />} />
        <Route path='employees' element={<Employees />} />
      </Routes>
    </RecoilRoot>
  </Router>,
  document.getElementById('root') as HTMLElement
);
