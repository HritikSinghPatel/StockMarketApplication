// Import necessary libraries
import React from 'react';
import { Link } from "react-router-dom";
// import Login from './Login';

import './Home.css'; // Import your CSS file for styling

// Create the Home component
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <h1>Stock Application</h1>
        </div>
        <div className="nav-links">
          {/* <Link to="/login">Dashboard</Link> */}
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
          {/* <a href="/register"> <Link to="/login">regis</Link></a> */}
        </div>
      </nav>

      {/* Content */}
        <div className="info-container">
          <h2>Market Trending Information</h2>
          <h3>
            {/* Welcome to our stock market application.  */}
            Here, you can find the latest updates,
            trends, and analysis of the financial market. Stay informed about stock prices,
            market indices, and more.
          </h3>
          <h4>
            Our mission is to provide you with accurate and timely information to help you make
            informed investment decisions.
          </h4>
          <h4>
            HOVER OVER THE IMAGES TO GET THE INFO...
          </h4>
        </div>
      <div className="content">
        {/* Stock Market Information */}

        {/* Stock Market Images */}
        <div className="image-container">
          <div className="image-info">
          <img src={require("../images/chart.jpg")} alt="Loading1" />
            <div className="overlay">
              <h3>Market Trends</h3>
              <p>Explore the latest market trends and predictions to guide your investment strategies.</p>
            </div>
          </div>

          <div className="image-info">
          <img src={require("../images/images1.jpeg")} alt="Loading2" />
            <div className="overlay">
              <h3>Financial News</h3>
              <p>Stay updated with breaking financial news and analysis from around the world.</p>
            </div>
          </div>

          <div className="image-info">
          <img src={require("../images/chart.jpg")} alt="Loading3" />
            <div className="overlay">
              <h3>Investment Strategies</h3>
              <p>Learn about successful investment strategies and tips from seasoned professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
