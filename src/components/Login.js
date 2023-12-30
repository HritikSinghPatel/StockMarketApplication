
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { Link, Navigate } from "react-router-dom";
import { useAuth } from '../contxt/AuthContext';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  // const [credentials, setCredentials] = useState({
  //   username: '',
  //   password: '',
  // });
  const {userLogin} = useAuth();
  const [logged,setLogged] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your authentication logic here
  //   console.log('Login ID:', loginId);
  //   console.log('Password:', password);
  //   // You can perform API calls or other authentication logic here
  // };

  const handleLogin = (e) => {
    e.preventDefault();
   
    // Simulate authentication logic 
    if (loginId === 'hritik' && password === 'hritik') {
     // onLogin(setCredentials);
     userLogin();
     setLogged(true);
      alert("Login successfully")
      console.log("Login Successfully!",loginId);
    } else {
      alert('Invalid username or password');
    }
  };
  
  if (logged) {
    return <Navigate to="/dashboard" />;
  }


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
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
