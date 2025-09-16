import React from "react";
import { motion } from "framer-motion";
import DigitalServices from "./DigitalServices";
import {
  Shield,
  Monitor,
  Cpu,
  CheckCircle,
  Zap,
  Database,
} from "lucide-react";
import p from "../assets/bggg.png";
import img1 from "../assets/bg4.png";
import img2 from "../assets/bg3.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const DigitalSlider = () => {
  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "24/7 Cyber Monitoring",
      description: "Real-time threat detection and response",
    },
    {
      icon: <Shield className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "Advanced Firewall Protection",
      description: "Multi-layered network security solutions",
    },
    {
      icon: <Database className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "Data Encryption & Privacy",
      description: "Enterprise-grade data protection",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "AI-Powered Security",
      description: "Intelligent threat analysis and prevention",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        style={{
          backgroundImage: `url(${p})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" />
        {/* ✅ Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div className="mb-8" variants={fadeInUpVariants}>
            <motion.div
              className="inline-flex items-center gap-2 bg-[rgb(0,0,128)]/10 backdrop-blur-sm border border-[rgb(0,0,128)]/30 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 !font-bold !text-[#15487d]" />
              <span className="!font-bold !text-[#15487d] text-sm">
                Digital Security Innovation
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl tracking-tight leading-tight !font-bold !text-[#15487d] mb-6">
              Advanced{" "}
              <span className="block !font-bold !text-[#15487d] ">
                Digital Security
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium text-gray-800">
              Protecting your digital infrastructure with cutting-edge
              cybersecurity solutions, advanced threat detection, and
              comprehensive data protection services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="relative py-20 bg-white bg-cover bg-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        {/* ✅ Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
            <h2 className="text-3xl md:text-4xl !font-bold !text-[#15487d] mb-4">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-gray-900 text-lg max-w-2xl mx-auto ">
              Industry-leading digital protection powered by advanced AI and
              expert security professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-[rgb(0,0,128)] transition-all duration-300"
                variants={slideInVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,128,0.1)",
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        className="relative py-20 bg-white bg-cover bg-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        {/* ✅ Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-32  to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInVariants}>
              <h2 className="text-3xl md:text-4xl !font-bold !text-[#15487d] mb-6">
                Next-Generation Cybersecurity
                <span className="block !text-[#15487d] !font-bold">
                  Protection & Intelligence
                </span>
              </h2>
              <p className="text-black text-lg mb-8 leading-relaxed">
                Our comprehensive digital security services combine AI-powered
                threat detection, advanced encryption technologies, and expert
                cybersecurity professionals to deliver complete protection for
                your digital assets and infrastructure.
              </p>

              <div className="space-y-4">
                {[
                  "Advanced threat detection and prevention",
                  "Real-time network monitoring and analysis",
                  "Data encryption and privacy protection",
                  "24/7 cybersecurity incident response",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeInUpVariants}
                  >
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-black">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card */}
            <motion.div className="relative" variants={fadeInUpVariants}>
              <div className="relative bg-white rounded-3xl p-8 backdrop-blur-sm border border-black/20">
                <div className="relative z-10 text-center">
                  <Shield className="w-16 h-16 text-black mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Intelligent Protection
                  </h3>
                  <p className="text-black mb-6">
                    Securing your digital future with AI-powered cybersecurity
                    solutions and expert threat intelligence.
                  </p>
                  <motion.button
                    className="bg-[#15487d] text-white px-6 py-2 rounded-full !font-bold hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <DigitalServices />
      </motion.div>
    </div>
  );
};

export default DigitalSlider;
