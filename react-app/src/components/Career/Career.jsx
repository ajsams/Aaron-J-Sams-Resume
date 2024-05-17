import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "../CarouselItem/CarouselItem";
import carouselContent from "../../content/carouselContent";
import "../../pages/Homepage/Homepage.css";
import "./Career.scss";

const CareerCarousel = () => {
  return (
    <section id="career">
      <div className="career-carousel">
        <div className="career-header-text">
          <h2>My Career Journey</h2>
        </div>
        <Carousel
          showIndicators={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={100}
        >
          {carouselContent.map((carouselEntry) => (
            <CarouselItem
              key={carouselEntry.key}
              imagePath={carouselEntry.imagePath}
              altText={carouselEntry.altText}
              title={carouselEntry.title}
              caption={carouselEntry.caption}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CareerCarousel;
