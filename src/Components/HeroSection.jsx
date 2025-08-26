import React from "react";
import vidios from "/assets/Videos/123.mp4"; 

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline   // ✅ Prevent fullscreen controls on mobile
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={vidios} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-12">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Protecting People, Assets & Communities — <br />
          Trusted Physical Security Solutions.
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Comprehensive protection powered by expertise, technology, and 24/7 support.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-pill transition">
            Request the free Security Audit
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-pill transition">
            View Solution
          </button>
        </div>

        {/* Checkpoints */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="px-4 py-2 border border-gray-300 rounded-full text-white">
            ✔️ ISO Certified
          </span>
          <span className="px-4 py-2 border border-gray-300 rounded-full text-white">
            ✔️ Trusted by NGOs & Enterprises
          </span>
          <span className="px-4 py-2 border border-gray-300 rounded-full text-white">
            ✔️ 24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
