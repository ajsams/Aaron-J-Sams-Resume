import React from "react";
import "./CarouselItem.css";

const CarouselItem = (props) => {
  const { imagePath, altText, title, caption } = props;

  const formattedCaption = caption.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="carousel-item">
      <div className="carousel-img-div">
        <img className="carousel-img" src={imagePath} alt={altText} />
      </div>
      <div className="carousel-caption">
        <h3>{title}</h3>
        <p>{formattedCaption}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
