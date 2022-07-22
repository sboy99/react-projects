import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/all";

export const Login = () => {
  return (
    <>
      <div className="form">
        <div className="heading">
          <h1>Log In</h1>
        </div>
        <FormControl />
        <div className="down-form">
          <div className="signIn">
            <button className="btn btn-signIn">Sign in</button>
            <a href="">Forgot your Password?</a>
          </div>
          <div className="signUp ">
            <p>Don't Have an account?</p>
            <a href="" className="a-signUp">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const FormControl = () => {
  const [showPass, setShowPass] = useState(true);

  return (
    <>
      <div className="form-control">
        <input type="text" required />
        <h4>Username or Email</h4>
        <span className="error">Error msg</span>
      </div>
      <div className="form-control">
        <input
          type={showPass ? "password" : "text"}
          required
          className="password"
        />
        <button onClick={() => setShowPass(!showPass)}>
          {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
        <h4>Password</h4>
        <span className="error">Error msg</span>
      </div>
    </>
  );
};
