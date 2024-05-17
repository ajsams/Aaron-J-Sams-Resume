import React from "react";
import "../../pages/Homepage/Homepage.css";
import "./TextSection.scss";

const TextSection = (props) => {
  const { textHeader, textContent, className } = props;
  return (
    <section id="text-section">
      <div
        className={className ? className + " text-container" : "text-container"}
      >
        <div className="text-header">{textHeader}</div>
        <div className="text-content">{textContent}</div>
      </div>
    </section>
  );
};

export default TextSection;
