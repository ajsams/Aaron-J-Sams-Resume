import React from "react";
import RoleSection from "../RoleSection/RoleSection";
import experienceContent from "../../experienceContent";

import "../../pages/Homepage/Homepage.css";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-section-container">
        <h2>Professional Experience</h2>
        {experienceContent.map((experienceEntry) => (
          <RoleSection
            institution={experienceEntry.institution}
            roleItems={experienceEntry.roleItems}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
