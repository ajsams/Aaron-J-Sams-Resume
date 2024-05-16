import React from "react";
import { headerHeight } from "../Header/Header";
import "../../pages/Homepage/Homepage.css";
import "./Hero.css";

const Hero = (props) => {
  const { imgSource, imgAlt, heroH1Text, heroParText } = props;
  return (
    <section id="hero" style={{ paddingTop: headerHeight }}>
      <div className="hero-container">
        {/*Accounts for height of header*/}
        <div className="img-container">
          <img src={imgSource} alt={imgAlt} loading="lazy" />
        </div>
        <div className="hero-text">
          <h1>{heroH1Text}</h1>
          <p>{heroParText}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
