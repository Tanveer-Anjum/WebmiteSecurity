import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, setSelectedService, setShowApplyModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ update when screen resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="relative w-full h-48 md:h-56 cursor-pointer"
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

          {/* Back: Details (White background) */}
          <div
            className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg p-3 shadow-md flex flex-col bg-white"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="text-center mb-1">
              <div className="inline-block p-1.5 rounded bg-gray-100">
                <div className="w-5 h-5">{service.icon}</div>
              </div>
              <h3
                className="!text-xl font-bold text-black mt-1"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {service.title}
              </h3>
            </div>
            <p
              className="text-gray-700 !text-xl text-center mb-1"
              style={{ fontFamily: "Arial Narrow" }}
            >
              {service.description.substring(0, 45)}...
            </p>
            <div className="mt-auto flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                  setShowApplyModal(true);
                }}
                className="bg-blue-600 text-white py-1 px-3 rounded text-xs !font-bold transition hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        // --- Mobile: White background card (no flip) ---
        <div className="w-full h-full rounded-lg overflow-hidden shadow-md flex flex-col bg-white">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-24 object-cover"
          />
          <div className="p-3 text-center flex flex-col flex-grow">
            <div className="inline-block p-1.5 rounded bg-gray-100 mb-1">
              <div className="w-5 h-5">{service.icon}</div>
            </div>
            <h3
              className="!text-xl !font-bold text-black mb-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {service.title}
            </h3>
            <p
              className="text-gray-700 !text-3xl mb-2"
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
              className="bg-[#0f3e70] text-white py-1 px-3 rounded text-xs !font-bold transition"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
