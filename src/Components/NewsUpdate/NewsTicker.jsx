import React from "react";
import "./NewsUpdate.css";

const NewsTicker = ({ showVideo, isDigitalSecurityActive }) => {
  return (
    <div
      className={`
        ticker-container text-white py-2 font-bold flex justify-center items-center
        ${isDigitalSecurityActive ? "bg-[#702829]"  : "bg-[#15487d]"}  
        /* Brown when Digital, Blue when Physical */
      `}
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <p className="text-center text-xs mt-3">
        {showVideo
          ? "Streaming Security Insights..."
          : "Your Trusted Security and Technology Partner"}
      </p>
    </div>
  );
};

export default NewsTicker;
