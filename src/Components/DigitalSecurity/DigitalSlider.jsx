  
  import React, { useState } from "react";
  import { motion } from "framer-motion";
import ServicesSection from "../PhysicalSecurity/ServicesSection";
  
  const DigitalSlider = () => {
    const slides = [
      { id: 1, image: "../assets/Images/guardb.jpg" }, 
      { id: 2, image: "../assets/Images/tec.jpg" }, 
      // { id: 3, image: "../assets/Images/cmo.jp"}, 
      // { id: 4, image: "../assets/Images/1122.jpg" }, 
      { id: 5, image: "../assets/Images/guardb.jpg" },
      { id: 6, image: "../assets/Images/tec.jpg" }, 
    ];
  
    const [current, setCurrent] = useState(0);
  
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
  <section className="w-full bg-blue-800 text-white py-16 flex flex-col items-center text-center px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        All-in-One Physical Security Solutions
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl text-lg md:text-xl leading-relaxed mb-8"
      >
        Our physical security services provide comprehensive on-ground protection,
        including on-site guards, advanced CCTV monitoring, secure transport, and
        24/7 support. With Shehrity, your people, property, and assets are always
        protected.
      </motion.p>

      {/* Button */}
      <motion.a
        href="#services"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 8px 20px rgba(255,255,255,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-300 hover:bg-blue-700 hover:text-black !no-underline"
      >
        Explore Our Service
      </motion.a>
    </section>
    <ServicesSection/>
\

      </>
        );
};

export default DigitalSlider;