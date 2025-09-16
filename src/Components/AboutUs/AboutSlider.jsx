import React from "react";
import { motion } from "framer-motion";

import aboutus from "../assets/bgtm.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const AboutSlider = () => {
  return (
    
 <motion.div
  className="w-full h-[60vh] mt-0 items-center flex justify-center bg-cover relative shadow-[0_5px_10px_rgba(0,0,0,0.3)]"
  style={{ backgroundImage: `url(${aboutus})` }}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3 }}
>
  {/* Centered Text */}
  <div className="relative text-center px-6">
    <h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl !font-bold !text-[#15487d] drop-shadow-lg tracking-wide font-[Poppins]"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      About Us
    </h1>

    <p className="mt-4 max-w-2xl mx-auto  !text-black text-sm sm:text-base md:text-lg !font-bold drop-shadow-md">
      We are dedicated to providing innovative solutions that blend technology,
      creativity, and professionalism. Our mission is to build digital
      experiences that truly inspire.
    </p>

    {/* Learn More Button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 px-6 py-2 !rounded-3xl bg-[#0b3664] text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
    >
      Learn More
    </motion.button>
  </div>
</motion.div>

  )
};

export default AboutSlider;
