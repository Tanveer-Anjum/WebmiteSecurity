import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

const ServiceCard = ({ service, setSelectedService, setShowApplyModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ Update isMobile when screen resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
          className="relative w-full h-30 md:h-56 cursor-pointer"
          onMouseEnter={() => !isMobile && setIsFlipped(true)}
          onMouseLeave={() => !isMobile && setIsFlipped(false)}
          whileHover={!isMobile ? { scale: 1.02 } : {}}
          transition={{ duration: 0.2 }}
        >
          {!isMobile ? (
            // --- Desktop Flip Animation ---
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Front: Image */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
    
              {/* Back: Details */}
              <div
                className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg p-3 shadow-md bg-gradient-to-br from-orange-500 to-amber-600 border border-orange-400/50 flex flex-col"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="text-center mb-1">
                  <div className="inline-block p-1.5 rounded bg-white/20">
                    <div className="w-5 h-5">{service.icon}</div>
                  </div>
                  <h3 className="text-sm font-bold text-white mt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-orange-100 text-xs text-center mb-1">
                  {service.description.substring(0, 45)}...
                </p>
                <div className="mt-auto flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                      setShowApplyModal(true);
                    }}
                    className="bg-amber-500 text-white py-1 px-2 rounded text-xs font-semibold hover:bg-amber-600 transition"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            // --- Mobile: Show stacked content (no flip) ---
            <div className="w-full h-full rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-orange-500 to-amber-600 border border-orange-400/50 flex flex-col">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-center flex flex-col flex-grow">
                <div className="inline-block p-1.5 rounded bg-white/20 mb-1">
                  <div className="w-5 h-5">{service.icon}</div>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{service.title}</h3>
                <p className="text-orange-100 text-xs mb-2">
                  {service.description.substring(0, 45)}...
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                    setShowApplyModal(true);
                  }}
                  className="bg-amber-500 text-white py-1 px-2 rounded text-xs font-semibold hover:bg-amber-600 transition"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </motion.div>
      );
    };

// 🔹 Parent Component
const DigitalServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // ✅ 6 services
  const digitalServices = [
    {
      id: 1,
      title: "Cyber Threat Monitoring",
      image: "/assets/Images/security1.webp",
      description: "24/7 monitoring of your digital infrastructure.",
    },
    {
      id: 2,
      title: "Endpoint Security",
      image: "/assets/Images/security.jpeg",
      description: "Protection for all devices connected to your network.",
    },
    {
      id: 3,
      title: "Cloud Security",
      image: "/assets/Images/44.jpg",
      description: "Securing your cloud platforms and storage solutions.",
    },
    {
      id: 4,
      title: "Data Privacy Audits",
      image: "/assets/Images/13.png",
      description: "Comprehensive audits to ensure compliance and safety.",
    },
    {
      id: 5,
      title: "Incident Response",
      image: "/assets/Images/44.jpg",
      description: "Immediate response to cyberattacks and breaches.",
    },
    {
      id: 6,
      title: "Network Security",
      image: "/assets/Images/1122.jpg",
      description: "Robust firewall and intrusion detection solutions.",
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
        className="text-2xl md:text-xl !font-bold !text-[#15487d] mb-2 justify-center text-center"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        Digital Security Services
      </motion.h1>
      <motion.p
        className="text-sm text-black max-w-2xl mx-auto justify-center text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
      >
        Enterprise-grade cybersecurity solutions designed to protect your
        digital infrastructure
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20 ">
        {digitalServices.map((service) => (
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
        <div className="fixed inset-0 flex items-center justify-cente z-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-lg font-bold mb-2">
              Apply for {selectedService.title}
            </h2>
            <p className="mb-4">{selectedService.description}</p>
            <button
              onClick={() => setShowApplyModal(false)}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalServices;
