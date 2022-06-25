import React from "react";

const inputs = [
  {
    id: 1,
    type: "text",
    title: "Username/Email",
  },
  {
    id: 2,
    type: "password",
    title: "Password",
  },
];

export const Form = () => {
  return (
    <>
      <div className="form">
        <div className="heading">
          <h1>Log In</h1>
        </div>
        {inputs.map((input) => (
          <FormControl key={input.id} {...input} />
        ))}
        <div className="down-form">
          <div className="signIn">
            <button className="btn btn-signIn">Sign in</button>
            <a href="#">Forgot your Password?</a>
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

const FormControl = ({ title, type }) => {
  return (
    <>
      <div className="form-control">
        <input type={type} required />
        <h4>{title}</h4>
        <span className="error">Error msg</span>
      </div>
    </>
  );
};
