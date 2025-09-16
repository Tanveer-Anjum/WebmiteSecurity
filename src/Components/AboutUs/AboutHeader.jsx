import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import Head from "./Head";
import CardAbout from './CardAbout';
import StatsSection from './StatsSection';
import ContactUs from './ContactUs';
import TeamCard from './TeamSection';
import TimelineSection from './TimelineSection';
import img from '../assets/bg2.jpg'; // Your background image

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 }
};

const slideFromTop = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutHeader = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      author: "Morgan Smith, CEO Tech Solutions",
      rating: 5,
      testimonial: "Shehrity has been our trusted security partner for over 5 years. Their professionalism and expertise are unmatched.",
    },
    {
      author: "Sarah Johnson, Operations Manager",
      rating: 5,
      testimonial: "The response time is incredible and their team is always prepared. We feel completely secure with their services.",
    },
    {
      author: "David Chen, Facility Director",
      rating: 5,
      testimonial: "From consultation to implementation, Shehrity delivered beyond our expectations. Highly recommended!",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div
      className="relative min-h-screen text-black bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10">
        <Head title="About Us" currentPage="About" />

        {/* Intro Section - Now scroll-triggered with reverse on scroll out */}
        <motion.div
          className="py-24 px-6 lg:px-12 pt-28"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-center font-light tracking-wide text-black drop-shadow-md"
            variants={childVariants}
          >
            We are a premier security solutions provider, committed to delivering unparalleled safety and peace of mind. With decades of expertise, we specialize in cutting-edge cybersecurity, physical security, and rapid-response emergency services.
          </motion.p>
        </motion.div>

        {/* Hero Section - Enhanced with stagger and scroll trigger, no once for re-trigger */}
        <motion.section
          className="py-20 lg:py-28 overflow-hidden w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="space-y-8"
                variants={slideFromTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center bg-blue-600/90 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-tight drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  variants={childVariants}
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Over 40 Years of Excellence
                </motion.div>
                <motion.h1 
                  className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-black drop-shadow-lg"
                  variants={childVariants}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  Welcome to Shehrity
                </motion.h1>
                <motion.p 
                  className="text-lg lg:text-xl leading-relaxed font-light tracking-wide text-black drop-shadow-md"
                  variants={childVariants}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  Since 1980, Shehrity has been a trusted name in security, serving businesses with unmatched expertise. As one of the nation’s leading security firms, our highly trained professionals deliver top-tier services tailored to your needs.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-6"
                  variants={childVariants}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  {["Event Security", "Armed Security", "Venue Security"].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      variants={childVariants}
                    >
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="font-semibold text-lg text-black drop-shadow-md">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  variants={childVariants}
                >
                  <img
                    src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg"
                    alt="Security Professional"
                    className="w-full h-[28rem] object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section - Enhanced scroll animation, no once */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <CardAbout />
        </motion.div>

        {/* Timeline Section - Enhanced scroll animation, no once */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <TimelineSection />
        </motion.div>

        {/* Stats Section - Enhanced scroll animation, no once */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <StatsSection />
        </motion.div>

        {/* Testimonials Section - Enhanced with black text for visibility, no once */}
        <motion.section
          className="py-16 lg:py-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-center mb-12 tracking-tight text-black drop-shadow-lg"
            variants={childVariants}
            transition={{ duration: 0.6 }}
          >
          </motion.h2>
           {/* <div className="max-w-3xl mx-auto relative"> 
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="relative h-56"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TestimonialCard {...testimonials[currentTestimonial]} />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-400"
                  } hover:bg-blue-500`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  variants={childVariants}
                />
              ))}
            </div>
          </div> */}
        </motion.section>

        {/* Team Section */}
        <div>
          <TeamCard />
        </div>

        {/* Contact Section - Uncommented and enhanced with scroll animation */}
       {/* <motion.section
          className="bg-gray-100/90 rounded-2xl p-8 lg:p-12 mx-4 lg:mx-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <ContactUs />
        </motion.section>*/}
      </div> 

      {/* Parallax effect on background for extra smoothness */}
      <motion.div
        className="absolute inset-0 bg-black/10"
        initial={{ y: 0 }}
        whileInView={{ y: "-20%" }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default AboutHeader;