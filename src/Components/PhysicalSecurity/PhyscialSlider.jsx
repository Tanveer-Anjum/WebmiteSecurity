import React from "react";
import { motion } from "framer-motion";
import PhysicalServices from "./PhysicalServices";
import { Shield, Eye, Lock, Users, CheckCircle } from "lucide-react";
import d from "../assets/bggg.png";
import img1 from "../assets/bg4.png";
import img2 from "../assets/bgtan.jpg";

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

const PhysicalSlider = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 !text-[#15487d] !font-bold" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance and protection",
    },
    {
      icon: <Eye className="w-6 h-6 !text-[#15487d] !font-bold" />,
      title: "Advanced CCTV Systems",
      description: "State-of-the-art video monitoring technology",
    },
    {
      icon: <Users className="w-6 h-6 !text-[#15487d] !font-bold" />,
      title: "Professional Guards",
      description: "Highly trained security personnel",
    },
    {
      icon: <Lock className="w-6 h-6 !text-[#15487d] !font-bold" />,
      title: "Access Control",
      description: "Comprehensive entry management systems",
    },
  ];

  return (
    <div className="relative overflow-hidden font-sans text-black">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center shadow-[0_5px_10px_rgba(0,0,0,0.3)] "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        style={{
          backgroundImage: `url(${d})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" />
        {/* ✅ Bottom shadow */}
               <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div className="mb-8" variants={fadeInUpVariants}>
            <h1 className="text-5xl md:text-7xl  tracking-tight leading-tight !text-[#15487d] !font-bold mb-6">
              Comprehensive
              <span className="block !text-[#15487d] !font-bold">
                Physical Security
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium text-gray-900">
              Protecting your assets with cutting-edge technology, expert
              personnel, and unwavering commitment to safety and security
              excellence.
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
        viewport={{ amount: 0.3, once: true }}
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        {/* ✅ Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
            <h2 className="text-3xl md:text-4xl  mb-4 !text-[#15487d] !font-bold"
               style={{ fontFamily: "Arial, sans-serif" }}>
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
        viewport={{ amount: 0.3}}
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        {/* ✅ Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInVariants}>
              <h2 className="text-3xl md:text-4xl !font-bold mb-6 !text-[#15487d]"
                 style={{ fontFamily: "Arial, sans-serif" }}>
                Unparalleled Physical Security
                <span className="block !text-[#15487d]">
                  Protection & Support
                </span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Our comprehensive physical security services combine expert
                personnel, advanced surveillance technology, and proven
                methodologies to deliver complete protection for your
                facilities, assets, and people.
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
                    <CheckCircle className="w-5 h-5 !text-[#15487d] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" variants={fadeInUpVariants}>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200">
                <div className="relative z-10 text-center">
                  <Shield className="w-16 h-16 !text-[#15487d]  mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Trusted Protection</h3>
                  <p className="mb-6">
                    Safeguarding what matters most with precision, reliability,
                    and unwavering dedication to your security needs.
                  </p>
                  <motion.button
                    className="bg-[#15487d] !font-bold text-white px-6 py-3 rounded-full  hover:bg-[rgb(25,25,112)] transition-colors"
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
