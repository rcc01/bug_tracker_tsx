import { Helmet, HelmetProvider } from 'react-helmet-async';
import StoreContextProvider from './contexts/providers/UserStoreContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import Tickets from './components/Tickets/Tickets';
import Employees from './components/Employees/Employees';
import Calendar from './components/Calendar/Calendar';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  return (
    <>
      <StoreContextProvider>
        <Router>
          {/* Kanban needs RecoilRoot... */}
          <Routes>
            {/* App or loginForm? in element? use both? */}
            <Route path='/' element={<LoginForm />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='register' element={<SignupForm />} />
            <Route path='/' element={<ProtectedRoutes />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='tickets' element={<Tickets />} />
              <Route path='calendar' element={<Calendar />} />
              <Route path='employees' element={<Employees />} />
            </Route>
          </Routes>
        </Router>
      </StoreContextProvider>
    </>
  );
};

export default App;
