import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { LoginForm } from './components/LoginForm/LoginForm';





// What's gonna happen with user state, where is it going to be? watch the video again!!! on Youtube!


const App: React.FC = () => {

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");



  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const Logout = () => {
    setUser({
      email: ""
    });
  };



  const Login = (details: { email: string; password: string; }) => {
    if (details.email === adminUser.email &&
      details.password === adminUser.password) {
      console.log("Logged in!");
      setUser({
        email: details.email
      });
      navigate('dashboard')
    } else {
      console.log("Details do not match. Please try again!");
      setError("Details do not match. Please try again!")
    }
  }


  let navigate = useNavigate();

  return (
    <div>





      {user.email !== "" ? (
        <div>
          <div className="welcome">
            <p>
              Welcome <span>{user.email}!</span>
            </p>
            <button onClick={Logout}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}


    </div>
  )
}

export default App;
