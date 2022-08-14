import { Navigate, Outlet, RouteProps } from 'react-router-dom';

interface PProps extends RouteProps {
  isAuth: boolean;
}

const ProtectedRoutes = ({ isAuth }: PProps) => {
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to='/login' />;
};

export default ProtectedRoutes;
