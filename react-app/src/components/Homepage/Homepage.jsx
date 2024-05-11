import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import CareerCarousel from "../Career/Career";
import Skills from "../Skills/Skills";
import "./Homepage.css";

function Homepage() {
  return (
    <div id="homepage">
      <Header />
      <Hero />
      <CareerCarousel />
      <Skills />
      <Footer />
    </div>
  );
}

export default Homepage;
