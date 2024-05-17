import React from "react";
import "../../pages/Homepage/Homepage.css";
import "./RoleSection.css";

const RoleSection = (props) => {
  const { institution, roleItems } = props;

  return (
    <div className="institution-section-container">
      <h3>{institution}</h3>
      {roleItems.map((roleEntry) => (
        <div className="role-section-container">
          <h4>
            {roleEntry.role} ({roleEntry.startDate} - {roleEntry.endDate})
          </h4>
          <p>{roleEntry.roleDesc}</p>
          <div className="role-list">
            <ul>
              {roleEntry.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleSection;
