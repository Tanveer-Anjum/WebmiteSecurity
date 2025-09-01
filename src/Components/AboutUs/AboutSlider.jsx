import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    { src: "../assets/Images/cmo.jpg", alt: "Slide 1" },
    { src: "../assets/Images/guad.jpg", alt: "Slide 2" },
    { src: "../assets/Images/tec.jpg", alt: "Slide 3" },
  ];

  return (
    <div className="relative w-full h-[500px] text-5xl">
      {/* Carousel */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect} // this updates state on auto-slide too
        indicators={false}
        controls={true}
        interval={2000}
        fade
      >
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 h-[500px] object-cover"
              src={slide.src}
              alt={slide.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* Custom Blue Circle Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition ${
              i === index ? "bg-blue-500 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;
