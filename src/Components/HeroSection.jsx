import React from "react";
import vidios from "/assets/Videos/123.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-[80px] md:pt-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // ✅ Prevent fullscreen controls on mobile
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={vidios} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-16 text-white">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-xl sm:max-w-2xl leading-snug">
          Protecting People, Assets & Communities — <br className="hidden sm:block" />
          Trusted Physical Security Solutions.
        </h1>

        {/* Paragraph */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl">
          Comprehensive protection powered by expertise, technology, and 24/7 support.
        </p>

        {/* Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="bg-[#15487d] hover:bg-blue-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition text-sm sm:text-base">
            Request the free Security Audit
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition text-sm sm:text-base">
            View Solution
          </button>
        </div>

        {/* Checkpoints */}
        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full text-xs sm:text-sm md:text-base">
            ✔️ ISO Certified
          </span>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full text-xs sm:text-sm md:text-base">
            ✔️ Trusted by NGOs & Enterprises
          </span>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full text-xs sm:text-sm md:text-base">
            ✔️ 24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
