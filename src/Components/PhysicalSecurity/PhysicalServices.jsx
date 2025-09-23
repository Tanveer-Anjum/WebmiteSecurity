import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 
import img1 from "../assets/bg3.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 120 },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  },
};

// 🔹 ServiceCard (flip card)
const ServiceCard = ({ service, setSelectedService, setShowApplyModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
  <motion.div
  className="relative w-full h-52 cursor-pointer"
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3 }}
  whileHover="hover"
  onMouseEnter={() => setIsFlipped(true)}
  onMouseLeave={() => setIsFlipped(false)}
>
  <motion.div
    className="absolute inset-0 w-full h-full"
    style={{ transformStyle: "preserve-3d" }}
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {/* Front */}
    <div
      className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Back */}
    <div
      className="absolute inset-0 w-full h-full rounded-lg p-3 shadow-md bg-white border border-gray-200 flex flex-col"
      style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
    >
      <h3
        className="!text-md !font-bold text-gray-900 text-center"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {service.title}
      </h3>
      <p
        className="text-gray-700 text-xs text-center mt-1 mb-2"
        style={{ fontFamily: "Arial Narrow" }}
      >
        {service.description.substring(0, 50)}...
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedService(service);
          setShowApplyModal(true);
        }}
        className="bg-[#15487d]  text-white py-1 px-2 rounded text-xs !font-bold transition mt-auto"
      >
        Apply
      </button>
    </div>
  </motion.div>
</motion.div>

  );
};

// 🔹 Parent Component
const PhysicalServices = ({ isDigitalSecurityActive }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // ✅ Mode-based colors
  const primaryColor = isDigitalSecurityActive ? "#702829" : "#15487d";

  const physicalServices = [
    {
      id: 1,
      title: "Cyber Threat Monitoring",
      image: "/assets/Images/security1.webp",
      description: "24/7 monitoring of your digital infrastructure.",
      highlights: [
        "Real-time detection of suspicious activity",
        "AI-powered threat intelligence",
        "Continuous monitoring for malware & intrusions",
      ],
    },
    {
      id: 2,
      title: "Endpoint Security",
      image: "/assets/Images/security.jpeg",
      description: "Protection for all devices connected to your network.",
      highlights: [
        "Advanced antivirus & anti-malware protection",
        "Multi-device security management",
        "Automatic patch updates for vulnerabilities",
      ],
    },
    {
      id: 3,
      title: "Cloud Security",
      image: "/assets/Images/44.jpg",
      description: "Securing your cloud platforms and storage solutions.",
      highlights: [
        "Secure cloud storage & backups",
        "Multi-layer encryption for sensitive data",
        "Compliance with GDPR & HIPAA",
      ],
    },
    {
      id: 4,
      title: "Data Privacy Audits",
      image: "/assets/Images/13.png",
      description: "Comprehensive audits to ensure compliance and safety.",
      highlights: [
        "Identify compliance gaps",
        "Improve data handling processes",
        "Ensure industry security standards",
      ],
    },
    {
      id: 5,
      title: "Incident Response",
      image: "/assets/Images/44.jpg",
      description: "Immediate response to cyberattacks and breaches.",
      highlights: [
        "Rapid threat isolation",
        "Breach investigation & analysis",
        "Full recovery & reporting support",
      ],
    },
    {
      id: 6,
      title: "Network Security",
      image: "/assets/Images/1122.jpg",
      description: "Robust firewall and intrusion detection solutions.",
      highlights: [
        "Enterprise-grade firewalls",
        "Intrusion detection & prevention",
        "Zero-trust network architecture",
      ],
    },
  ];

  return (
    <div
      className="p-6"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.h1
        className="!text-2xl md:!text-4xl !font-bold mb-2 justify-center text-center"
        style={{ fontFamily: "Arial, sans-serif", color: primaryColor }}
      >
        Physical Security Services
      </motion.h1>
      <motion.p
        className="text-lg text-black max-w-2xl mx-auto justify-center text-center"
        style={{ fontFamily: "Arial Narrow" }}
      >
        Enterprise-grade cybersecurity solutions designed to protect your
        digital infrastructure
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {physicalServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            setSelectedService={setSelectedService}
            setShowApplyModal={setShowApplyModal}
          />
        ))}
      </div>

      {/* 🔹 Modal */}
      {showApplyModal && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full"
          >
            <h2
              className="!text-xl !font-bold mb-3 text-center"
              style={{ color: primaryColor ,fontFamily: "Arial, sans-serif"}}
            >
              {selectedService.title}
            </h2>

            <p className="text-gray-600 !text-xl mb-4 text-center"style={{fontFamily: "Arial Narrow"}}
            >
              {selectedService.description}
            </p>

            {/* ✅ Bullet Points with dynamic check color */}
            {selectedService.highlights && (
              <ul className="space-y-2 text-gray-800 text-sm">
                {selectedService.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle
                      className="mt-0.5"
                      style={{ color: primaryColor }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-white px-5 py-2 rounded-full !font-bold transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: primaryColor,
                  borderRadius: "9999px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PhysicalServices;
