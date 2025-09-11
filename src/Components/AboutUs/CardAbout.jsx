import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users } from "lucide-react";
import background from "../assets/bg2.jpg"; // ✅ import background image

export default function CardAbout() {
  return (
    <section
      className="relative w-full py-20"
      style={{
        fontFamily: "Arial Narrow",
        backgroundImage: `url(${background})`, // ✅ background from import
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 z-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateY: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}
          >
            COMPANY
          </h3>
          <p
            className="text-gray-600 leading-relaxed"
            style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}
          >
            Trusted security solutions from a comprehensive security business.
            Our experienced team caters to industrial, commercial, and armed
            security services. We are dedicated to safeguarding your business
            assets and ensuring a safe environment.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateY: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
            <Award className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">LICENSED</h3>
          <p className="text-gray-600 leading-relaxed">
            Shehrity is a trusted security guard company in Australia. Our team
            of experienced professionals works to reduce, neutralize, and ensure
            your peace of mind. We provide comprehensive security solutions and
            physical security services.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateY: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
            <Users className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">TOP NOTCH</h3>
          <p className="text-gray-600 leading-relaxed">
            Quality assures the utmost client security solutions. Our team
            specializes in providing cutting-edge technology and expert team
            protect common commercial and retail areas from theft, vandalism,
            and loitering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
