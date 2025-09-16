import React from "react";

const SecuritySwitchButton = ({ handleSecuritySwitch, isDigitalSecurityActive }) => {
  return (
    <button
      onClick={handleSecuritySwitch}
      className={`
        hidden sm:block   /* 🔹 Hide on mobile */
        px-4 py-2 
        text-white font-semibold 
        shadow-lg
        transform hover:scale-105 
        transition-all duration-300
        absolute z-30
        left-1/2 -translate-x-1/2   /* center horizontally */
        -bottom-10                 /* overlap into WhyChooseUs */
        ${isDigitalSecurityActive ? "bg-[#702829]" : "bg-[#15487d]"}  
      `}
      style={{ borderRadius: "9999px", fontFamily: "Arial, sans-serif" }}
    >
      {isDigitalSecurityActive
        ? "Switch to Physical Security"
        : "Switch to Digital Security"}
    </button>
  );
};

export default SecuritySwitchButton;
