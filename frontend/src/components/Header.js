import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>MARKETLINK</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/sign-in" className="sign-in-btn">Sign in</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
