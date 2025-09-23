import React from "react";
import { motion } from "framer-motion";
import img2 from '../assets/bg3.png';
import career from "../assets/aboutbg2.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const CareerPage = ({ isDigitalSecurityActive }) => {
  // 🎨 Dynamic theme
  const primaryColor = isDigitalSecurityActive ? "#702829" : "#15487d"; // brown or blue
  const textColor = isDigitalSecurityActive ? "#702829" : "#15487d";

  return (
    <>
      {/* Header Section */}
      <motion.div
        className="w-full h-[60vh] mt-2 items-center flex justify-center bg-cover relative shadow-[0_5px_10px_rgba(0,0,0,0.3)]"
        style={{ backgroundImage: `url(${career})` }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Bottom Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none mt-24">
          <div className="relative text-center px-6">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl !font-bold drop-shadow-lg tracking-wide"
              style={{ fontFamily: "Arial, sans-serif", color: textColor }}
            >
              Careers
            </h1>
            <p
              className="mt-4 max-w-2xl mx-auto text-gray-800 text-sm sm:text-base md:text-lg font-semibold drop-shadow-md"
              style={{ fontFamily: "Arial Narrow" }}
            >
              We are dedicated to providing innovative solutions that blend technology, creativity, and professionalism. Our mission is to build digital experiences that truly inspire.
            </p>

            {/* Learn More Button */}
      
          </div>
   
        </div>
        <div className="mt-32 ">
                  <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
  whileTap={{ scale: 0.95 }}
  className="mt-4 px-6 py-2 !rounded-3xl text-white !font-bold text-lg shadow-lg transform transition-all duration-300"
  style={{ backgroundColor: primaryColor }}
>
  Learn More
</motion.button>
</div>
      </motion.div>

      {/* Career Section */}
      <motion.div
        className="w-full bg-white py-24 px-6 md:px-16"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <motion.h2
              className="!text-3xl !font-bold mb-4"
              style={{ fontFamily: "Arial, sans-serif", color: textColor }}
              variants={childVariants}
            >
              Join Our Team
            </motion.h2>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm !text-md"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <p style={{ fontFamily: "Arial Narrow" }}>
                  At Shehrity, we believe that our people are our greatest asset. We are a dynamic and innovative company at the forefront of software development and artificial intelligence, and we are always looking for talented, driven individuals to join our team.
                </p>
              </motion.div>

              <motion.h2
                className="!text-3xl !font-bold mb-4"
                style={{ fontFamily: "Arial, sans-serif", color: textColor }}
                variants={childVariants}
              >
                How to Apply
              </motion.h2>

              <motion.div
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm text-md"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <p style={{ fontFamily: "Arial Narrow" }}>
                  Applying is simple! Explore our open positions, upload your resume, and share why you’d be a great fit for Shehrity Security Services...
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Application Form */}
         <motion.div
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    className="bg-white/95 rounded-xl p-8 shadow-xl"
                  >
                    <form className="space-y-4">
                      {/* Name fields */}
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                        variants={childVariants}
                      >
                        <motion.input
                          type="text"
                          placeholder="First Name*"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                          whileFocus={{ borderColor: "#1f2937", scale: 1.01 }}
                          variants={childVariants}
                        />
                        <motion.input
                          type="text"
                          placeholder="Last Name*"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                          whileFocus={{ borderColor: "#1f2937", scale: 1.01 }}
                          variants={childVariants}
                        />
                      </motion.div>
        
                      {/* Email & Phone */}
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={childVariants}
                      >
                        <motion.input
                          type="email"
                          placeholder="Email*"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                          whileFocus={{ borderColor: "#1f2937", scale: 1.01 }}
                          variants={childVariants}
                        />
                        <motion.input
                          type="tel"
                          placeholder="Phone*"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                          whileFocus={{ borderColor: "#1f2937", scale: 1.01 }}
                          variants={childVariants}
                        />
                      </motion.div>
        
                      {/* Subject */}
                      <motion.input
                        type="text"
                        placeholder="Subject*"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                        whileFocus={{ borderColor: "#1f2937", scale: 1.01 }}
                        variants={childVariants}
                      />
        
                      {/* Message */}
                      <motion.textarea
                        rows="5"
                        placeholder="Message*"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 resize-none transition-all duration-300"
                        whileFocus={{ borderColor: "#1f2937", scale: 1.01 }}
                        variants={childVariants}
                      ></motion.textarea>
        
                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        className="w-full md:w-auto !font-bold text-white px-6 py-2 !rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: primaryColor }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={childVariants}
                      >
                        Send Message →
                      </motion.button>
                    </form>
                  </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CareerPage;
