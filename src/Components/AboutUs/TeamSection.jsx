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
  {
    id: 4,
    name: "David Garcia",
    role: "Lead Software Engineer",
    image: "../assets/Images/13.png",
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
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 drop-shadow-lg tracking-wide">
            Our Team
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl leading-snug">
            Meet With Our Expert Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}>
              {/* Card */}
              <div className="overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                {/* Image & Overlay */}
                <div className="relative rounded-t-lg">
                  <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                    <img
                      src={member.image || "/images/placeholder.png"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-lg"
                    />
                  </div>

                  {/* Social Icons Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 rounded-t-lg ${
                      hoveredMember === member.id
                        ? "opacity-100 bg-[#15487d]/80"
                        : "opacity-0"
                    }`}>
                    <a
                      href={member.social.linkedin}
                      className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${socialColors.linkedin}`}>
                      <FaLinkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={member.social.telegram}
                      className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${socialColors.telegram}`}>
                      <FaTelegramPlane className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={member.social.facebook}
                      className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${socialColors.facebook}`}>
                      <FaFacebook className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="p-6 text-center rounded-b-lg">
                  <h3 className="text-xl font-bold mb-2 text-[#15487d]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#15487d]">
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
