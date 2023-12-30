// StockHeader.js

import React from 'react';
import './StockHeader.css'; // Import your CSS file

const StockHeader = () => {
  return (
    <header className="stock-header">
      <div className="logo-container">
        <img src={require("../images/Bull.avif")} alt="Stock Market Logo" />
        <h1>Stock Market</h1>
      </div>
      <nav className="nav-links">
        <a href="#stocks">Stocks</a>
        <a href="#dashboard">Dashboard</a>
      </nav>
    </header>
  );
};

export default StockHeader;
