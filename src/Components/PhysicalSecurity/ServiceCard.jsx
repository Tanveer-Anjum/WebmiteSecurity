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
            className="w-full h-24 object-cover"
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

export default ServiceCard;
