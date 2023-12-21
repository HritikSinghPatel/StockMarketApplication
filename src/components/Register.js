
import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import { Link } from "react-router-dom";

const Register = () => {
  const [loginId, setLoginId] = useState('');
//   const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login ID:', loginId);
    console.log('Password:', password);
    // You can perform API calls or other authentication logic here
  };

  return (
    <div className="login-container">
      <div>Register</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="loginId">Name:</label>
        <input
          type="text"
          id="loginId"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <label htmlFor="loginId">E-mail:</label>
        <input
          type="text"
          id="loginId"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Register;
