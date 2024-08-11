import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="#" className="login-btn">Login</a>
          <a href="#" className="sign-in-btn">Sign in</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

