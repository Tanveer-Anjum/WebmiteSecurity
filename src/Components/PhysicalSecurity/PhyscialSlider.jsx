

import React from "react";
import { motion } from "framer-motion";
import PhysicalServices from "./PhysicalServices";
import { Shield, Eye, Lock, Users, ArrowRight, CheckCircle } from "lucide-react";
import d from "../assets/bggg.png";
import img1 from "../assets/bg4.png";
import img2 from "../assets/bg1.jpg";

// Enhanced animation variants with smoother transitions
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
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  idle: {
    scale: 1,
    boxShadow: "0 4px 20px rgba(0, 0, 128, 0.3)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 30px rgba(0, 0, 128, 0.5)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

const PhysicalSlider = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance and protection",
    },
    {
      icon: <Eye className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "Advanced CCTV Systems",
      description: "State-of-the-art video monitoring technology",
    },
    {
      icon: <Users className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "Professional Guards",
      description: "Highly trained security personnel",
    },
    {
      icon: <Lock className="w-6 h-6 text-[rgb(0,0,128)]" />,
      title: "Access Control",
      description: "Comprehensive entry management systems",
    },
  ];

  return (
    <div className="relative overflow-hidden font-sans text-black">
      {/* Hero Section with background image */}
      {/* Hero Section with background image */}
<motion.section
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3, once: true }}
  style={{
    backgroundImage: `url(${d})`,
  }}
>
  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 bg-white/60" />

  {/* Main Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <motion.div className="mb-8" variants={fadeInUpVariants}>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-black mb-6">
        Comprehensive
        <span className="block text-[rgb(0,0,128)] font-extrabold">
          Physical Security
        </span>
      </h1>

      <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium text-gray-800">
        Protecting your assets with cutting-edge technology, expert personnel,
        and unwavering commitment to safety and security excellence.
      </p>
    </motion.div>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      variants={fadeInUpVariants}
    >
    

    
    </motion.div>
  </div>
</motion.section>


      {/* Features Section */}
      <motion.section
        className="relative py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Industry-leading protection backed by years of expertise and
              cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[rgb(0,0,128)] transition-all duration-300"
                variants={slideInVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,128,0.1)",
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        className="relative py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unparalleled Physical Security
                <span className="block text-[rgb(0,0,128)]">Protection & Support</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Our comprehensive physical security services combine expert
                personnel, advanced surveillance technology, and proven
                methodologies to deliver complete protection for your facilities,
                assets, and people.
              </p>

              <div className="space-y-4">
                {[
                  "Professional on-site security guards",
                  "Advanced CCTV monitoring systems",
                  "Secure transportation services",
                  "24/7 emergency response team",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeInUpVariants}
                  >
                    <CheckCircle className="w-5 h-5 text-[rgb(0,0,128)] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" variants={fadeInUpVariants}>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200">
                <div className="relative z-10 text-center">
                  <Shield className="w-16 h-16 text-[rgb(0,0,128)] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Trusted Protection
                  </h3>
                  <p className="mb-6">
                    Safeguarding what matters most with precision, reliability,
                    and unwavering dedication to your security needs.
                  </p>
                  <motion.button
                    className="bg-[rgb(0,0,128)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(25,25,112)] transition-colors"
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
        viewport={{ amount: 0.3, once: true }}
      >
        <PhysicalServices />
      </motion.div>
    </div>
  );
};

export default PhysicalSlider;
