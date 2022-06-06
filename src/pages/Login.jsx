import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginCreds, setloginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setloginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/");
  };
  return (
    <div className="LoginBox" style={styles}>
      <input data-cy="login-email" name="email" onChange={onChange} />

      <br />
      <input data-cy="login-password" name="password" onChange={onChange} />

      <br />
      <button data-cy="login-submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
