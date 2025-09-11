import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from '../assets/bg1.jpg';
import img2 from '../assets/bg3.png';

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

const CareerPage = () => {
  return (
    <>
      {/* Top Fingerprint Banner - Enhanced hero section */}
      <motion.div
        className="relative w-full h-[190px] sm:h-[220px] md:h-[260px] lg:h-[500px] flex items-center justify-center  overflow-hidden text-black"
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
          <FaFingerprint className="text-gray-500 text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] opacity-80 drop-shadow-lg" />
        </motion.div>

        {/* Centered Text - Enhanced for professionalism and visibility */}
        <motion.h1
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black drop-shadow-2xl tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
          variants={heroTextVariants}
        >
          Careers
        </motion.h1>
      </motion.div>

      {/* Career Section - Unchanged design with added animations */}
      <motion.div
        className="w-full bg-white py-24 px-6 md:px-16"
        style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Career Info */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              variants={childVariants}
            >
              Join Our Team
            </motion.h2>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm text-sm"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  At Shehrity, we believe that our people are our greatest asset. We are a dynamic and
                  innovative company at the forefront of software development and artificial intelligence, and we are always looking for talented, driven individuals to join our team. If you're passionate about technology and want to be part of a company that values creativity,
                  collaboration, and professional growth, Shehrity could be the perfect place for you.
                </p>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                variants={childVariants}
              >
                How to Apply
              </motion.h2>
              <motion.div
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm text-sm"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  Applying is simple! Explore our open positions, upload your resume, and share why you’d be a great fit for Shehrity Security Services. We carefully review all applications and will reach out if your skills and experience align with our needs. At Shehrity, your career is more than just a job—it’s a path to growth, excellence, and making a real impact. Join us and be part of a team dedicated to security, 
                  innovation, and protecting what matters most.
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
            className="bg-white rounded-xl p-8 shadow-xl"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
                <motion.input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
                <motion.input
                  type="tel"
                  placeholder="Phone*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
              </motion.div>

              {/* Subject */}
              <motion.input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                variants={childVariants}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              />

              {/* Message */}
              <motion.textarea
                rows="5"
                placeholder="Message*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800 resize-none"
                whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                variants={childVariants}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              ></motion.textarea>

              {/* Resume / Photo Upload */}
              <motion.div
                className="space-y-2"
                variants={childVariants}
              >
                <label
                  className="block text-gray-700 font-medium"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Upload Your Resume / Photo
                </label>
                <motion.input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                  whileFocus={{ borderColor: '#1f2937', scale: 1.01 }}
                  variants={childVariants}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full md:w-auto bg-[#15487d] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out"
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

export default CareerPage;
