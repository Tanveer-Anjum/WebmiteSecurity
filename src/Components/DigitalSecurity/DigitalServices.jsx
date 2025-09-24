import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 
import img1 from "../assets/alaboutbg.jpg";

const ServiceCard = ({ service, setSelectedService, setShowApplyModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <motion.div
  className="relative w-full h-30 md:h-[20rem] cursor-pointer"
  onMouseEnter={() => !isMobile && setIsFlipped(true)}
  onMouseLeave={() => !isMobile && setIsFlipped(false)}
  whileHover={!isMobile ? { scale: 1.02 } : {}}
  transition={{ duration: 0.2 }}
>
  {!isMobile ? (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Front */}
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-md border border-gray-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg p-3 shadow-md bg-white border border-gray-200 flex flex-col"
        style={{ transform: "rotateY(180deg)" }}
      >
        <h3
          className="!text-md !font-bold text-gray-900 text-center mb-1"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {service.title}
        </h3>
        <p
          className="text-gray-900 text-2xl text-center mb-2"
          style={{ fontFamily: "Arial Narrow" }}
        >
          {service.description.substring(0, 45)}...
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
  ) : (
    // --- Mobile (no flip) ---
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 flex flex-col">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center flex flex-col flex-grow">
        <h3
          className="!text-md !font-bold text-gray-900 mb-1"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {service.title}
        </h3>
        <p
          className="text-gray-700 text-xs mb-2"
          style={{ fontFamily: "Arial Narrow" }}
        >
          {service.description.substring(0, 45)}...
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
    </div>
  )}
</motion.div>

  );
};

const DigitalServices = ({ isDigitalSecurityActive }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // 🎨 Dynamic theme colors
  const primaryColor = isDigitalSecurityActive ? "#702829" : "#15487d";
  const fewColor  = isDigitalSecurityActive? "#000000": "#15487d"

  const digitalServices = [
    {
      id: 1,
      title: "Cyber Threat Monitoring",
      image: "/assets/Images/security1.webp",
      description: "24/7 monitoring of your digital infrastructure.",
      highlights: [
        "Real-time detection of suspicious activity",
        "AI-powered threat intelligence",
        "Continuous malware monitoring",
      ],
    },
    {
      id: 2,
      title: "Endpoint Security",
      image: "/assets/Images/security.jpeg",
      description: "Protection for all devices connected to your network.",
      highlights: [
        "Advanced antivirus & anti-malware",
        "Multi-device security management",
        "Automatic patch updates",
      ],
    },
    {
      id: 3,
      title: "Cloud Security",
      image: "/assets/Images/44.jpg",
      description: "Securing your cloud platforms and storage solutions.",
      highlights: [
        "Secure cloud storage",
        "Multi-layer encryption",
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
        "Improve data handling",
        "Ensure security standards",
      ],
    },
    {
      id: 5,
      title: "Incident Response",
      image: "/assets/Images/44.jpg",
      description: "Immediate response to cyberattacks and breaches.",
      highlights: [
        "Rapid threat isolation",
        "Breach investigation",
        "Recovery & reporting support",
      ],
    },
    {
      id: 6,
      title: "Network Security",
      image: "/assets/Images/1122.jpg",
      description: "Robust firewall and intrusion detection solutions.",
      highlights: [
        "Enterprise-grade firewalls",
        "Intrusion detection",
        "Zero-trust network model",
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
      {/* Title */}
      <motion.h1
        className="text-2xl md:!text-4xl !font-bold mb-2 text-center"
        style={{ fontFamily: "Arial, sans-serif", color: primaryColor }}
      >
        Digital Security Services
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-sm max-w-2xl mx-auto text-center"
        style={{ fontFamily: "Arial, sans-serif"}}
      >
        Enterprise-grade cybersecurity solutions designed to protect your
        digital infrastructure
      </motion.p>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {digitalServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            setSelectedService={setSelectedService}
            setShowApplyModal={setShowApplyModal}
          />
        ))}
      </div>

      {/* Modal */}
      {showApplyModal && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full"
          >
            <h2
              className="text-xl !font-bold mb-3 text-center"
              style={{ color: primaryColor ,fontFamily: "Arial, sans-serif"}}
            >
              {selectedService.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4 text-center"
               style={{ color: primaryColor,fontFamily: "Arial Narrow" }}>
              {selectedService.description}
            </p>

            {selectedService.highlights && (
              <ul className="space-y-2 text-sm">
                {selectedService.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle style={{ color: primaryColor }} className="mt-0.5" />
                    <span style={{ color: primaryColor }}>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Close Button */}
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

export default DigitalServices;
