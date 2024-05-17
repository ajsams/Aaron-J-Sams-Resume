import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import CareerCarousel from "../../components/Career/Career";
import Skills from "../../components/Skills/Skills";
import "../../index.css";
import "./Homepage.css";

function Homepage() {
  return (
    <div id="homepage">
      <Header />
      <Hero
        imgSource={"/images/aaron/headshot_round_small.png"}
        imgAlt={"Headshot of Aaron with his dog in a backpack."}
        heroH1Text={"Howdy, I'm Aaron"}
        heroParText={[
          "I'm a ",
          <b>scientist</b>,
          " and a ",
          <b>builder</b>,
          ". I get most excited when solving problems and generating insights with data AND when creating and building things.",
        ]}
      />
      <CareerCarousel />
      <Skills />
      <Footer />
    </div>
  );
}

export default Homepage;
