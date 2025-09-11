import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";
import img2 from '../assets/bg2.jpg';
import img1 from "../assets/bg3.png";


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
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

const heroTextVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
    },
  },
};

const fingerprintVariants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ContactForm = () => {
  return (
    <>
      {/* Top Fingerprint Banner */}
      <motion.div
        className="relative w-full h-[190px] sm:h-[220px] md:h-[260px] lg:h-[500px] flex items-center justify-center overflow-hidden text-black"
         style={{
                      backgroundImage: `url(${img1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundAttachment: 'fixed',
                    }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Fingerprint Icon with infinite animation */}
        <motion.div
          variants={fingerprintVariants}
          animate="animate"
          className="absolute"
        >
          <FaFingerprint className="text-gray-500 text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] opacity-70 drop-shadow-lg" />
        </motion.div>

        {/* Centered Text - Enhanced for visibility and professionalism */}
        <motion.h1
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black drop-shadow-2xl tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
          variants={heroTextVariants}
        >
          Get in Touch
        </motion.h1>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="w-full py-24 px-6 md:px-16 bg-gray-100/95"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-3xl font-semibold mb-4 text-black drop-shadow-md"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              variants={childVariants}
            >
              Contact Information
            </motion.h2>

            <div className="space-y-4">
              {/* Contact Us */}
              <motion.div
                className="flex items-center gap-4 bg-white/95 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-gray-900 text-xl">📞</div>
                <div>
                  <h3 className="font-semibold text-lg text-black" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Contact Us
                  </h3>
                  <p className="text-black text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                    +1 (844) 388-0988
                  </p>
                </div>
              </motion.div>

              {/* Send Mail */}
              <motion.div
                className="flex items-center gap-4 bg-white/95 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-gray-900 text-xl">📧</div>
                <div>
                  <h3 className="font-semibold text-lg text-black" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Send Us a Mail
                  </h3>
                  <p className="text-black text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                    info@shehrity.com
                  </p>
                </div>
              </motion.div>

              {/* Office Location */}
              <motion.div
                className="flex items-center gap-4 bg-white/95 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-gray-900 text-xl">📍</div>
                <div>
                  <h3 className="font-semibold text-lg text-black" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Office Location
                  </h3>
                  <p className="text-black text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                    Columbus, Ohio
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
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
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
                <motion.input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
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
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
                <motion.input
                  type="tel"
                  placeholder="Phone*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
              </motion.div>

              {/* Subject */}
              <motion.input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 transition-all duration-300"
                whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                variants={childVariants}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              />

              {/* Message */}
              <motion.textarea
                rows="5"
                placeholder="Message*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none text-black bg-white/90 resize-none transition-all duration-300"
                whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                variants={childVariants}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              ></motion.textarea>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                variants={childVariants}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
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

export default ContactForm;