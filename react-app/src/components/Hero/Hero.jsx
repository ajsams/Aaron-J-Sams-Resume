import React from "react";
import { headerHeight } from "../Header/Header";
import "../Homepage/Homepage.css";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: headerHeight }}>
      <div className="hero-container">
        {/*Accounts for height of header*/}
        <div className="img-container">
          <img
            src="/images/aaron/headshot_round_small.png"
            alt="Headshot of Aaron with his dog in a backpack."
            loading="lazy"
          />
        </div>
        <div className="hero-text">
          <h1>Howdy, I'm Aaron</h1>
          <p>
            I'm a <b>scientist</b> and a <b>builder</b>. I get most excited when
            solving problems and generating insights with data AND when creating
            and building things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
