import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './SignupForm.css';

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post('http://localhost:3000/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post('http://localhost:3000/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3000/login').then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className='signup--div'>
      <div className='formInput'>
        <h1 className='h1--signup'>Registration</h1>
        <label>Username</label>
        <input
          type='text'
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type='password'
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button className='signup--button' onClick={register}>
          Register
        </button>

        <p>
          Already have an account?
          <span style={{ marginLeft: '15px' }}>
            <Link to='/login'>Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
