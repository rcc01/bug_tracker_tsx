import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import StoreContext from '../../contexts/StoreContext';

const useLogout = () => {
  const navigate = useNavigate();
  const { singletonUserStore } = useContext(StoreContext);

  singletonUserStore.setName('');
  singletonUserStore.setEmail('');
  navigate('home'); // TODO: Unsure what the name of the home route is.
};

export default useLogout;
