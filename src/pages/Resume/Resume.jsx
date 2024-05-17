import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import TextSection from "../../components/TextSection/TextSection";
import RoleSection from "../../components/RoleSection/RoleSection";
import experienceContent from "../../content/experienceContent";
import educationContent from "../../content/educationContent";
import "../../index.css";
import "./Resume.scss";

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
      <TextSection
        className="certifications-section"
        textHeader={<h2>Professional Certifications & Continuing Education</h2>}
        textContent={[
          <h3>Leadership Development</h3>,
          <ul>
            <li>
              <a href="https://www.chalmersbrothers.com/soar">
                SOAR Leadership Program
              </a>
            </li>
            <li>
              <a href="https://ecornell.cornell.edu/certificates/leadership-and-strategic-management/leadership-essentials-certificate/">
                Leadership Essentials Certificate - ECornell
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/verify/specialization/UTW2JL8L44RS">
                Executive Data Science - John's Hopkins University via Coursera
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-9129977f-3e71-464b-92d6-af4b92bcb161/">
                Product Management for AI & Data Science
              </a>
            </li>
          </ul>,
          <h3>Software and Machine Learning</h3>,
          <ul>
            <li>
              <a href="https://www.udemy.com/certificate/UC-c035cf27-d802-412e-90b5-ebb323e41598/">
                The Complete 2024 Web Development Bootcamp - The App Brewery via
                Udemy
              </a>
            </li>

            <li>
              <a href="https://coursera.org/verify/specialization/UMXKWHQMLGFF">
                AI for Good - DeepLearning.AI
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/verify/4642X7ENRJZQ">
                Machine Learning Data Lifecycle in Production - DeepLearning.AI
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/verify/PB4H2RYGVPJP">
                Introduction to Machine Learning in Production - DeepLearning.AI
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/specialization/QSJLLFTQ32YY">
                Machine Learning Specialization - DeepLearning.AI
              </a>
            </li>
          </ul>,
          <h3>Video Games</h3>,
          <ul>
            <li>
              <a href="https://www.udemy.com/certificate/UC-73ea7ce2-e696-4281-87d6-b00b8a014178/">
                The Psychology of Games - Secrets of Good Game Design - Udemy
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-2d373858-e60c-4099-b663-5e9be8ff85da/">
                Pixel Art Master Course - Beginner to Professional/Freelance -
                Udemy
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-ce9e1112-40cd-4cd7-9ff8-55d3ae9c6c77/">
                Create a 2D RPG With the Godot Engine - Udemy
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-f04aec6b-4f62-47d6-86cc-f1344731820a/">
                Game Writing: Storytelling Through Video Game Design
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-383fc517-e010-4066-abaa-a682d8a4def3/">
                The Godot 3 Complete Developer Course - 2D and 3D
              </a>
            </li>
          </ul>,
        ]}
      />
      <TextSection
        className="skills-section"
        textHeader={<h2>Skills</h2>}
        textContent={
          <ul>
            <li>
              Leadership: Cross-Functional Teams, Team Management, Research and
              Data Strategy, Business Development
            </li>
            <li>
              Software Development: Python, SQL, Cloud Computing (AWS),
              Git/GitHub
            </li>
            <li>
              Machine Learning Tools: Numpy, Pandas, Scikit-Learn, Tensorflow,
              PyTorch
            </li>
            <li>
              Product/Project Managment: Agile (Scrum/KanBan/ScrumBan), Trello,
              Jira, Confluence
            </li>
            <li>
              Scientific Research: Statistical Methods, Randomization,
              Simulation, Machine Learning, Scientific Writing, Patent
              Application, Science Communication
            </li>
            <li>
              Video Games: Godot Engine, Pixel Art (Aseprite), 3D Modeling
              (Blender), Narrative Design
            </li>
          </ul>
        }
      />
      <TextSection
        className="education-section"
        textHeader={<h2>Education</h2>}
        textContent={educationContent.map((educationEntry) => (
          <RoleSection
            institution={educationEntry.institution}
            roleItems={educationEntry.roleItems}
          />
        ))}
      />
      <Footer />
    </div>
  );
}

export default Resume;
