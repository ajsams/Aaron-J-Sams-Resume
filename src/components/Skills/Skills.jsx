import React from "react";
import skillsContent from "../../content/skillsContent";
import SkillsCard from "../SkillsCard/SkillsCard";
import "../../pages/Homepage/Homepage.css";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header-text">
          <h2>My Skills</h2>
        </div>
        <div className="skills-card-container">
          {skillsContent.map((skillsEntry) => (
            <SkillsCard
              key={skillsEntry.key}
              pathObjects={skillsEntry.pathObjects}
              title={skillsEntry.title}
              caption={skillsEntry.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
