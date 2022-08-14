import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import StoreContext from './contexts/StoreContext';

const ProtectedRoutes = () => {
  const { singletonUserStore } = useContext(StoreContext);
  if (singletonUserStore.isLoggedIn()) {
    return <Outlet />;
  }
  return <Navigate to='/login' />;
};

export default ProtectedRoutes;
