import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Online Shopping</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper dui nisl, non dictum odio pharetra et.
          </p>
          <a href="#" className="cta-btn">Read more</a>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/assets/shopping-illustration.png`} alt="Online Shopping" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

