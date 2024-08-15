import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="MarketLink" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
