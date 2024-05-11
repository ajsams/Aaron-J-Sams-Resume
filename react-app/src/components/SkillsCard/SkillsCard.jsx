import React from "react";
import "../Homepage/Homepage.css";
import "./SkillsCard.css";

const Skills = (props) => {
  const { pathObjects, title, caption } = props;

  return (
    <div className="skills-card">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        {pathObjects.map((path, index) => (
          <path key={index} {...path} />
        ))}
      </svg>
      <div className="skills-text">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Skills;
