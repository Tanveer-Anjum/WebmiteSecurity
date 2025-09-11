import React, { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Components/Sass/TestCard.scss"; 
import ScrollToTop from "./ScrollToTop";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import img from './assets/bg2.jpg'
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

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="py-12 px-4" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Header */}
      <header className="text-center mb-10 space-y-3">
        <motion.span
          className="text-[#15487d] font-semibold px-3 py-2 rounded-full text-xs sm:text-sm flex justify-center items-center gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FaFingerprint /> Testimonials
        </motion.span>

        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2 leading-snug"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h1>
      </header>

      {/* Card */}
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Left Text */}
            <div className="flex flex-col space-y-3">
              <p className="text-gray-600 text-sm leading-relaxed">
                "{current.quote}"
              </p>
              <div className="flex items-center space-x-3 pt-1">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {current.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {current.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden shadow-sm">
              <img
                src={current.image}
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex mt-6 gap-4 sm:gap-6 justify-center items-center">
        <button
          onClick={prev}
          className="rounded-full h-10 w-10 flex items-center justify-center shadow bg-white hover:bg-gray-200 transition duration-300"
        >
          <BiSolidLeftArrowAlt />
        </button>
        <button
          onClick={next}
          className="rounded-full h-10 w-10 flex items-center justify-center shadow bg-white hover:bg-gray-200 transition duration-300"
        >
          <BiSolidRightArrowAlt />
        </button>
      </div>

      <ScrollToTop />
    </div>
  );
}
