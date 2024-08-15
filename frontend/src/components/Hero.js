import React from 'react';
import './Hero.css';
import shoppingIllustration from '../assets/shopping-illustration.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to MarketLink</h1>
        <p>Your one-stop shop for homemade products.</p>
        <a href="#shop" className="hero-button">Start Shopping</a>
      </div>
      <div className="hero-image">
        <img src={shoppingIllustration} alt="Shopping" />
      </div>
    </section>
  );
};

export default Hero;
