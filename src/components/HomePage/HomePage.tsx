import { useContext } from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import StoreContext from '../../contexts/StoreContext';
import useLogout from '../../hooks/auth/useLogout';

// TODO: Move App.css to HomePage.css if I am not mistaken.
const HomePage = () => {
  const { singletonUserStore } = useContext(StoreContext);
  const email = singletonUserStore.getEmail();
  return (
    <div>
      {email !== "" ? (
        <div>
          <div className="welcome">
            <p>
              Welcome <span>{email}!</span>
            </p>
            <button onClick={() => useLogout()}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default HomePage;
