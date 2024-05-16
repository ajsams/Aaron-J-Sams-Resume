import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import TextSection from "../../components/TextSection/TextSection";
import RoleSection from "../../components/RoleSection/RoleSection";
import experienceContent from "../../experienceContent";
import Experience from "../../components/Experience/Experience";
import "../../index.css";
import "./Resume.css";

function Resume() {
  return (
    <div id="resume">
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
      <TextSection
        className="summary-section"
        textHeader={<h2>Summary</h2>}
        textContent={[
          <p>
            I am a science and technology generalist that loves to build and
            scale scientific software (Python is my primary language). My
            experience includes hands on data science as well as leading data
            science teams. I have experience leading cross functional data
            product teams in PetTech and BioTech. This experience includes
            leading teams that built and managed data platforms and
            machine-learning prediction pipelines with automated delivery and
            monitoring.
          </p>,
          <p>
            Outside of my work in data science, I am working in video game
            development and building my full-stack web development skills.
          </p>,
          <p>I'm currently open to two types of opportunities:</p>,
          <ul>
            <li>
              Data science consulting - If you have pressing questions about
              your customers and/or existing data that you believe can be
              answered, but you don't have internal resources to answer those
              questions, I can help you generate insights from your existing
              data and help gather data from outside your organization.
            </li>
            <li>
              Corporate video game development - My game studio is open to
              contract opportunities to develop games for your business. Games
              can serve as powerful tools for communicating your brand message,
              building loyalty, or educating both your customers and employees.
              We are currently building proof points and are looking for early
              partners to build our business.
            </li>
          </ul>,
        ]}
      />
      <TextSection
        className="experience-section"
        textHeader={<h2>Professional Experience</h2>}
        textContent={experienceContent.map((experienceEntry) => (
          <RoleSection
            institution={experienceEntry.institution}
            roleItems={experienceEntry.roleItems}
          />
        ))}
      />
      <Footer />
    </div>
  );
}

export default Resume;
