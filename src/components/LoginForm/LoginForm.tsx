import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useLogin, { LoginProps } from "../../hooks/auth/useLogin";

const LoginForm = () => {
  const [details, setDetails] = useState<LoginProps>({ email: "", password: "" });
  const [error, setError] = useState("");

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const error = useLogin(details);
    setError(error);
    // navigate('/dashboard')
  }

  const submitSignup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    navigate("/register");
  }

  let navigate = useNavigate();

  return (
    <div>
      <div className="text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          style={{ width: "185px" }}
          alt="logo"
        />
        <h4 className="mt-1 mb-5 pb-1">Bug Tracker Login </h4>
      </div>

      <form>
        <div>
          <p>Log into your account</p>
          {/* Error message */}

          {error !== "" ? (
            <div
              className="error"
              style={{
                border: "1px solid",
                margin: "10px 0px",
                padding: "15px 10px 15px 50px",
                color: "#D8000C",
                backgroundColor: "#FFBABA",
                backgroundPosition: "10px center",
                backgroundImage:
                  "url('https://i.imgur.com/GnyDvKN.png')",
                backgroundRepeat: "no-repeat",
              }}
            >
              {error}
            </div>
          ) : (
            ""
          )}

          <div>
            <input
              type="email"
              placeholder='Email'
              onChange={(e) => setDetails({
                ...details, email: e.target.value
              })}
              value={details.email}
            />
            <label htmlFor="">Username</label>
          </div>

          <div>
            <input
              type="password"
              onChange={(e) => setDetails({
                ...details, password: e.target.value
              })}
              value={details.password}
            />
            <label htmlFor="">
              Password
            </label>
          </div>

          <div>
            <button
              className="btn btn-primary btn-block gradient-custom-2 mb-3"
              type="button"
              onClick={submitHandler}
            >
              Log in
            </button>
          </div>

          <div>
            <p>Dont' you have an account?</p>
            <button
              type="button"
              onClick={submitSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}


export { LoginForm };



