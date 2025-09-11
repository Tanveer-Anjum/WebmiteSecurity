import React from "react";
import digitalVideo from "/assets/Videos/123.mp4";

const DigitalHeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-[80px] md:pt-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={digitalVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-16 text-white">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold max-w-xl sm:max-w-2xl leading-snug font-['Roboto',sans-serif]">
          Safeguarding Your Digital World — <br className="hidden sm:block" />
          Advanced Cyber & IT Security Solutions.
        </h1>

        {/* Paragraph */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl font-['Roboto',sans-serif]">
          From firewalls to data encryption — protect your business against evolving cyber threats with our cutting-edge digital security services.
        </p>

        {/* Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="bg-[#15487d] hover:bg-blue-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition text-sm font-['Roboto',sans-serif]">
            Get a Free Cyber Audit
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition text-sm font-['Roboto',sans-serif]">
            Explore Digital Solutions
          </button>
        </div>

        {/* Checkpoints */}
        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full text-xs sm:text-sm font-['Roboto',sans-serif]">
            🔒 End-to-End Encryption
          </span>
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full text-xs sm:text-sm font-['Roboto',sans-serif]">
            🛡️ AI-Powered Threat Detection
          </span>
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full text-xs sm:text-sm font-['Roboto',sans-serif]">
            🌐 24/7 Cyber Monitoring
          </span>
        </div>
      </div>
    </div>
  );
};

export default DigitalHeroSection;
