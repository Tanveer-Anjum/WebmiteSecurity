import React from "react";
import { motion } from "framer-motion";

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="p-6 md:p-10 mb-20">
      <div className="flex justify-center items-center mb-12">
        <h2
          className="text-2xl md:text-3xl !font-bold text-center !text-[#15487d]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Our Journey
        </h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-200"></div>

        <div className="space-y-12 md:space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Card */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-100 transition-all duration-300">
                  <div className="text-[#15487d] !font-bold text-xl md:text-2xl mb-2">
                    {milestone.year}
                  </div>
                  <h3
                    className="!text-lg md:text-xl !font-bold text-[#15487d] mb-2"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {milestone.event}
                  </h3>
                  <p className="!text-[#15487d]"
                    style={{ fontFamily: '"Arial Narrow", Arial, sans-serif' }}
                  >{milestone.desc}</p>
                </div>
              </div>

              {/* Circle on the line */}
              <div className="relative z-10 flex justify-center md:block">
                <div className="w-5 h-5 bg-[#15487d] rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-125"></div>
              </div>

              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
