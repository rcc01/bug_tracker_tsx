import StoreContextProvider from './contexts/providers/StoreContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Tickets from './components/Tickets';
import Employees from './components/Employees';
import Calendar from './components/Calendar';
import LoginForm from './components/LoginForm';
import ProtectedRoutes from './ProtectedRoutes';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <>
      <StoreContextProvider>
        <Router>
          <Routes>
            {/* App or loginForm? in element? use both? */}
            <Route path='/' element={<LoginForm />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='register' element={<RegisterForm />} />
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
