import React from "react";
import "../../pages/Homepage/Homepage.css";
import "./TextSection.css";

const TextSection = (props) => {
  const { textHeader, textContent } = props;
  return (
    <section id="text-section">
      <div className="text-container">
        <div className="text-header">{textHeader}</div>
        <div className="text-content">{textContent}</div>
      </div>
    </section>
  );
};

export default TextSection;
