import React, { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

export default function TestCard() {
  const testimonials = [
    {
      quote: "Morgaan Smith is effectively a review or recommendation from a client...",
      name: "Morgaan Smith",
      title: "Client",
      avatar: "/assets/Images/1.jpg",
      image: "/assets/Images/b1.jpg",
    },
    {
      quote: "The team was incredibly responsive and delivered results...",
      name: "Jane Doe",
      title: "Marketing Director",
      avatar: "/assets/Images/11.jpeg",
      image: "/assets/Images/b1.jpg",
    },
    {
      quote: "Working with them has been a game-changer for our business...",
      name: "John Appleseed",
      title: "CEO, Tech Solutions",
      avatar: "/assets/Images/44.jpg",
      image: "/assets/Images/security.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Header */}
      <header className="text-center mb-12 space-y-3">
        <motion.span
          className="text-blue-600 font-semibold px-3 py-2 rounded-full text-sm flex justify-center items-center gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FaFingerprint /> Testimonials
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          LOVES FROM SPECIAL CLIENTS
        </motion.h1>
      </header>

      {/* Card */}
      <motion.div
        className="bg-white rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-5xl mx-auto transition-all"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="grid md:grid-cols-2 gap-60 items-center">
          {/* Left Text */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800">
              What Our Clients Are Saying
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              "{current.quote}"
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <motion.img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover shadow"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
                viewport={{ once: true }}
              />
              <div>
                <p className="font-semibold text-gray-900">{current.name}</p>
                <p className="text-gray-500">{current.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full h-full md:h-full rounded-2xl overflow-hidden shadow-lg"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src={current.image}
              alt="Client"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex mt-6 gap-6 justify-center items-center">
          <button
            onClick={prev}
            className="rounded-full h-10 w-10 flex items-center justify-center shadow hover:bg-gray-100 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="rounded-full h-10 w-10 flex items-center justify-center shadow hover:bg-gray-100 transition"
          >
            →
          </button>
        </div>
      </motion.div>

      {/* Scroll Up Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white rounded-full p-2 shadow border border-gray-400 hover:bg-blue-500 hover:text-gray-300 transition"
      >
        ↑
      </button> */}
      <ScrollToTop></ScrollToTop>
    </div>
  );
}
