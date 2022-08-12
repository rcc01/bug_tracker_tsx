import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const [registration, setRegistration] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });

  console.log(registration);

  return (
    <div className='signup--div'>
      {/* onSubmit within form tag? it seems not to be working.... I put it in the button tag */}
      <form action='/' className='signup--form' method='GET'>
        <div className='formInput'>
          <h1 className='h1--signup'>Register</h1>

          <label htmlFor='username'>Username</label>
          <input
            type='text'
            onChange={(e) =>
              setRegistration({ ...registration, username: e.target.value })
            }
            value={registration.username}
            required
          />

          {/* // pattern="^[A-Za-z0-9]{3,16}$ How do I apply the regex below to the ternary operator? */}
          {/* How to show errors AFTER submitting the form? */}

          {/* error message */}
          {/* {registration.username.length < 3 || registration.username.length > 16 ? <span className="span--errorMessage">Username should be 3 - 16 characters long. It should't include any special characters.</span> : ""} */}

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            onChange={(e) =>
              setRegistration({ ...registration, email: e.target.value })
            }
            value={registration.email}
            required
          />

          {/* {registration.email === "" ? (<span className="span--errorMessage">An email address is required</span>) : ""} */}

          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            onChange={(e) =>
              setRegistration({ ...registration, fullName: e.target.value })
            }
            value={registration.fullName}
            required
          />

          {/* {registration.fullName === "" ? (<span className="span--errorMessage">Full name is required</span>) : ""} */}

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            onChange={(e) =>
              setRegistration({ ...registration, password: e.target.value })
            }
            value={registration.password}
            required
          />

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            onChange={(e) =>
              setRegistration({
                ...registration,
                confirmPassword: e.target.value,
              })
            }
            value={registration.confirmPassword}
            required
          />

          {/* {registration.password === registration.confirmPassword ? "" : (<span className="span--errorMessage">Password do not match. Try again!</span>)} */}

          {/* in order to submit the form with all the details... what does it work? button or input or both? */}
          <input type='submit' className='signup--button' value='submit' />
        </div>

        <p>
          Already have an account?
          <Link to='/'>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
