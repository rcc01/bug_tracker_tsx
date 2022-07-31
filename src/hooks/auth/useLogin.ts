import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../contexts/StoreContext';

export interface LoginProps {
  email: string;
  password: string;
}
// the result of useLogin should be a :string =>
const useLogin = ({ email, password }: LoginProps): string => {
  const navigate = useNavigate();
  const { singletonUserStore } = useContext(StoreContext);

  //const adminUser is type LoginProps interface
  const adminUser: LoginProps = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  if (email === adminUser.email && password === adminUser.password) {
    console.log('Logged in!');
    singletonUserStore.setEmail(email);
    navigate('dashboard');
  } else {
    console.log('Details do not match. Please try again!');
    return 'Details do not match. Please try again!';
  }
  return '';
};

export default useLogin;
