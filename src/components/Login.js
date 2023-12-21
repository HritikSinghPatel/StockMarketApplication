
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { Link } from "react-router-dom";

const Login = () => {
  const [loginId, setLoginId] = useState('');
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
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="loginId">Login ID:</label>
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

        <button type="submit">Submit</button>
        <br></br><br></br>
      <div>
        Don't have a account? <Link to="/register">Register</Link>
      </div>
      </form>
    </div>
  );
};

export default Login;
