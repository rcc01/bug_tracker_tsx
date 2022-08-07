import { useContext } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import StoreContext from '../../contexts/StoreContext';

// TODO: Move App.css to HomePage.css if I am not mistaken.
const HomePage = () => {
  const { singletonUserStore } = useContext(StoreContext);
  const email = singletonUserStore.getEmail();
  return (
    <div>
      {email !== '' ? (
        <div>
          <div className='welcome'>
            <p>
              Welcome <span>{email}! </span>
            </p>
            {/* There was a logout button here but I think I can put it on DASHBOARD */}
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default HomePage;
