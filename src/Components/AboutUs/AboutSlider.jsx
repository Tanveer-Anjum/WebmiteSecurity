import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";
import about from "../assets/bggg.png";

const AboutSlider = () => {
  return (
    <div
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      

      {/* Centered Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg tracking-wide font-[Poppins]">
          About Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg font-light">
          We are dedicated to providing innovative solutions that blend technology, creativity, and professionalism. Our mission is to build digital experiences that truly inspire.
        </p>

        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default AboutSlider;
