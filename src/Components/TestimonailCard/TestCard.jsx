import React, { useState } from 'react';
import { FaFingerprint } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TestCard() {
  const testimonials = [
    {
      quote: "Morgaan Smith is effectively a review or recommendation from a client...",
      name: "Morgaan Smith",
      title: "Client",
      avatar:"../src/assets/Images/1.jpg",
      image: "../src/assets/Images/security.jpeg"
    },
    {
      quote: "The team was incredibly responsive and delivered results...",
      name: "Jane Doe",
      title: "Marketing Director",
      avatar: "../src/assets/Images/11.jpeg",
      image: "../src/assets/Images/b1.jpg"
    },
    {
      quote: "Working with them has been a game-changer for our business...",
      name: "John Appleseed",
      title: "CEO, Tech Solutions",
      avatar: "../src/assets/Images/44.jpg",
      image: "../src/assets/Images/security.jpeg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6 relative">

      <header className="text-center mb-12 space-y-3">
        <motion.span
          className="text-blue-600 font-semibold px-3 py-1 rounded-full text-sm flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaFingerprint /> Testimonials
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          LOVES FROM SPECIAL CLIENTS
        </motion.h1>
      </header>

      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-5xl mx-auto transition-all">
        <div className="grid md:grid-cols-2 gap-8 items-center">

         
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">What Our Clients Are Saying</h2>
            <p className="text-gray-600 text-lg leading-relaxed">"{current.quote}"</p>
            <div className="flex items-center space-x-4 pt-2">
              <img src={current.avatar} alt={current.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">{current.name}</p>
                <p className="text-gray-500">{current.title}</p>
              </div>
            </div>
          </motion.div>

        
          <motion.div
            className="w-full h-60 md:h-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={current.image}
              alt="Client"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
<div className="flex mt-6 gap-6 justify-center items-center">
  <button 
    onClick={prev} 
    className="rounded-circle h-10 w-10 flex items-center justify-center shadow hover:bg-gray-100 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  </button>

  <button 
    onClick={next} 
    className="rounded-circle h-10 w-10 flex items-center justify-center shadow hover:bg-gray-100 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </button>
</div>

      </div>

      {/* Scroll Up Button */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 bg-white rounded-full p-2 shadow border border-gray-400 hover:bg-blue-500 hover:text-gray-300 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

    </div>
  );
}
