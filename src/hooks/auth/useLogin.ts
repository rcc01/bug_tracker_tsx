import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StoreContext from '../../contexts/StoreContext';

export interface LoginProps {
  email: String;
  password: String;
}

const useLogin = ({ email, password }: LoginProps) => {
    const navigate = useNavigate();
    const { singletonUserStore } = useContext(StoreContext);

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123",
    };

    if (email === adminUser.email &&
      password === adminUser.password) {
      console.log("Logged in!");
      singletonUserStore.setEmail(email);
      navigate('dashboard')
    } else {
      console.log("Details do not match. Please try again!");
      return "Details do not match. Please try again!"
    }
    return "";
}

export default useLogin;