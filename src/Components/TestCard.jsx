import React, { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Components/Sass/TestCard.scss"; 
import ScrollToTop from "./ScrollToTop";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";

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
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-10 relative">
      
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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 leading-snug"
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
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="card-ticket">
          <div className="content-ticket grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Text */}
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                What Our Clients Are Saying
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                "{current.quote}"
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center sm:space-x-4 space-y-3 sm:space-y-0 pt-2">
                <motion.img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {current.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {current.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <motion.div className="w-full h-[200px] sm:h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <motion.img
                src={current.image}
                alt="Client"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
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
