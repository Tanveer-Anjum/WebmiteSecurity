import React, { useState } from "react";
import { FaLinkedin, FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../assets/bg3.png"; // background image

// Team Members
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "../assets/Images/security.jpeg",
    social: { linkedin: "#", telegram: "#", facebook: "#" },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "../assets/Images/44.jpg",
    social: { linkedin: "#", telegram: "#", facebook: "#" },
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Head of Project Management",
    image: "../assets/Images/1122.jpg",
    social: { linkedin: "#", telegram: "#", facebook: "#" },
  },

];

// Social icon colors
const socialColors = {
  linkedin: "bg-blue-700 hover:bg-blue-800",
  telegram: "bg-blue-400 hover:bg-blue-500",
  facebook: "bg-blue-600 hover:bg-blue-700",
};

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 "></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-lg md:text-xl !font-bold !text-[#15487d] mb-2 drop-shadow-lg tracking-wide">
            Our Team
          </h3>
          <h2 className="text-3xl md:text-5xl !font-bold !text-[#15487d] mb-4 drop-shadow-2xl leading-snug">
            Meet With Our Expert Team
          </h2>
        </div>

        {/* Team Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
  {teamMembers.map((member, index) => (
    <motion.div
      key={member.id}
      className="relative group flex justify-center"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      transition={{ delay: index * 0.2 }}>
      {/* Card */}
      <div className="flex flex-col w-full max-w-xs bg-white/95 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
        {/* Image & Overlay */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={member.image || "/images/placeholder.png"}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Social Icons Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
              hoveredMember === member.id
                ? "opacity-100 bg-[#15487d]/80"
                : "opacity-0"
            }`}>
            <a
              href={member.social.linkedin}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${socialColors.linkedin}`}>
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href={member.social.telegram}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${socialColors.telegram}`}>
              <FaTelegramPlane className="w-5 h-5 text-white" />
            </a>
            <a
              href={member.social.facebook}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${socialColors.facebook}`}>
              <FaFacebook className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Name & Role */}
        <div className="p-4 text-center flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-1 text-[#15487d]">
            {member.name}
          </h3>
          <p className="text-xs font-medium text-[#15487d]">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
