import React from "react";
import { motion } from "framer-motion";
import { FaFingerprint, FaCheckCircle } from "react-icons/fa";
import img from "../assets/bg4.png";
const milestones = [
  {
    year: "1980",
    event: "Company Founded",
    desc: "Started as a small security firm with big dreams",
  },
  {
    year: "1995",
    event: "Major Expansion",
    desc: "Expanded services to include armed security and event protection",
  },
  {
    year: "2010",
    event: "Technology Integration",
    desc: "Integrated cutting-edge surveillance and monitoring systems",
  },
  {
    year: "2020",
    event: "Digital Transformation",
    desc: "Launched mobile app and AI-powered security solutions",
  },
  {
    year: "2024",
    event: "Industry Leader",
    desc: "Recognized as Australia's premier security service provider",
  },
];

export default function TimelineSection() {
  const cardVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariantReverse = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="bg-white rounded-2xl p-10 shadow-xl mb-20"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="flex justify-center items-center align-items-center flex-row gap-2 mb-16 ">
      
        <h2 className="text-2xl !font-bold text-center !text-[#15487d] "
           style={{ fontFamily: "Arial, sans-serif" }}
        >
          Our Journey
        </h2>
      </div>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              variants={index % 2 === 0 ? cardVariant : cardVariantReverse}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}>
              {/* Card */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                }`}>
                <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-100 transition-all duration-300">
                  <div className="text-[#15487d] font-bold text-2xl mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl !font-bold text-[#15487d] mb-2"
                   style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {milestone.event}
                  </h3>
                  <p className="text-[#15487d]">{milestone.desc}</p>
                </div>
              </div>

              {/* Circle on the line */}
              <div className="relative z-10">
                <div className="w-5 h-5 bg-[#15487d] rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-125"></div>
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
