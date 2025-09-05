import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const ServiceSlider = () => {
  const slides = [
    { id: 1, image: "../assets/Images/guardb.jpg" },
    { id: 2, image: "../assets/Images/tec.jpg" },
    { id: 5, image: "../assets/Images/guardb.jpg" },
    { id: 6, image: "../assets/Images/tec.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Slider */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-[90vh] flex justify-center items-center"
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Explore our services tailored for both physical and digital worlds.
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-white hover:bg-white/20 rounded-s-lg z-10"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-white hover:bg-white/20 rounded-e-lg z-10"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border transition ${
                current === index
                  ? "bg-blue-700 border-blue-700"
                  : "border-gray-300 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-6 p-6 bg-gray-50 py-24">
        {/* Physical Security */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Physical Security Services
          </h3>
          <p className="text-gray-700 mb-4">
            Trusted on-ground security solutions for businesses, communities, and organizations.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(37,99,235,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/physical-security")} // ✅ redirect
            className="px-6 py-3 bg-[#15487d] text-white rounded-lg font-semibold transition"
          >
            Learn More
          </motion.button>
        </div>

        {/* Digital Security */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Digital Security Services
          </h3>
          <p className="text-gray-700 mb-4">
            Protecting your digital assets with cutting-edge cybersecurity solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(16,185,129,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/digital-security")} // ✅ redirect
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold transition"
          >
            Learn More
          </motion.button>
        </div>
      </div>
       
    </>
  );
};

export default ServiceSlider;
