import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <>
      {/* Top Fingerprint Banner */}
      <div className="relative w-full h-[190px] sm:h-[220px] md:h-[260px] lg:h-[300px] flex items-center justify-center bg-gray-400 overflow-hidden">
        {/* Fingerprint Icon with infinite animation */}
        <motion.div
          animate={{ y: [0, -13, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          <FaFingerprint className="text-white text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] opacity-80" />
        </motion.div>

        {/* Centered Text */}
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black drop-shadow-lg">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <motion.div
        className="w-full bg-white py-24 px-6 md:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>

            <div className="space-y-4">
              {/* Contact Us */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="text-blue-500 text-xl">📞</div>
                <div>
                  <h3 className="font-semibold text-lg">Contact Us</h3>
                  <p className="text-gray-600 text-sm">+1 (844) 388-0988</p>
                </div>
              </div>

              {/* Send Mail */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="text-blue-500 text-xl">📧</div>
                <div>
                  <h3 className="font-semibold text-lg">Send Us a Mail</h3>
                  <p className="text-gray-600 text-sm">info@shehrity.com</p>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="text-blue-500 text-xl">📍</div>
                <div>
                  <h3 className="font-semibold text-lg">Office Location</h3>
                  <p className="text-gray-600 text-sm">Columbus, Ohio</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-xl"
          >
            <form className="space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Message*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-gray-800 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-[#15487d] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
