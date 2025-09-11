import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaVideo, FaTruck, FaHeadset } from "react-icons/fa";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const services = [
    {
      title: "On-Site Guards",
      image: "/assets/Images/guardb.jpg",
      details: "Professional security personnel deployed to protect your premises, assets, and people with vigilant patrols and rapid response.",
      description: "Trained professionals ensuring safety at every site.",
      icon: <FaUserShield className="w-7 h-7" />,
      benefits: ["Trained and vetted staff", "Rapid incident response", "Visible deterrence"],
      applySteps: [
        "Share your site details and requirements",
        "We conduct a risk assessment",
        "Receive a tailored guarding plan",
        "Deploy trained guards on-site",
        "Ongoing supervision and reporting"
      ],
    },
    {
      title: "CCTV Monitoring",
      image: "/assets/Images/1122.jpg",
      details: "24/7 remote monitoring and incident response using advanced CCTV systems and analytics for proactive security.",
      description: "24/7 surveillance solutions tailored to your needs.",
      icon: <FaVideo className="w-7 h-7" />,
      benefits: ["Real-time alerts", "Incident recording", "Proactive analytics"],
      applySteps: [
        "Schedule camera coverage review",
        "Design monitoring and alerting rules",
        "Install/configure monitoring endpoints",
        "Begin 24/7 remote monitoring",
        "Periodic performance review"
      ],
    },
    {
      title: "Secure Transport",
      image: "/assets/Images/guad.jpg",
      details: "Safe and discreet movement of valuables with GPS-tracked vehicles and trained escort teams.",
      description: "Safe movement of goods, valuables, and sensitive items.",
      icon: <FaTruck className="w-7 h-7" />,
      benefits: ["GPS tracking", "Discreet routing", "Trained escorts"],
      applySteps: [
        "Provide pickup and destination details",
        "Route planning and risk evaluation",
        "Assign transport team and vehicle",
        "Live-tracked secure transit",
        "Delivery confirmation and report"
      ],
    },
    {
      title: "24/7 Support",
      image: "/assets/Images/girls.jpg",
      details: "Round-the-clock security support desk handling incidents, escalations, and dispatch.",
      description: "Always-on assistance with dedicated response teams.",
      icon: <FaHeadset className="w-7 h-7" />,
      benefits: ["Always available", "Clear SLAs", "Fast escalation"],
      applySteps: [
        "Set up contact and escalation matrix",
        "Define SLAs and response playbooks",
        "Go-live with support coverage",
        "Real-time incident handling",
        "Monthly service reviews"
      ],
    },
  ];

  return (
    <div className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            icon={service.icon}
            benefits={service.benefits}
            onApply={() => {
              setSelectedService(service);
              setShowApplyModal(true);
            }}
          />
        ))}
      </div>

      {/* How to Apply Modal */}
      {showApplyModal && selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowApplyModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 md:p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">How to Apply for {selectedService.title}</h2>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="text-gray-700 mb-4">{selectedService.details}</p>

            <div className="space-y-3 text-gray-700">
              {selectedService.applySteps && selectedService.applySteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">{idx + 1}</div>
                  <p className="pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowApplyModal(false)}
                className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesSection;
