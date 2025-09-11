import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsUpdate.css";

const NewsTicker = ({ showVideo }) => {
  const location = useLocation();

  // ✅ Brown if we are on digital-security route
  const isDigital = location.pathname === "/digital-security";

  return (
    <div
      className="ticker-container text-white py-2 bg-[#15487d]"
    >
      <div className="ticker-content">
        <span>
          Latest Update: Shehrity expands digital security services across ANZ! •
        </span>
        <span>New CCTV monitoring solutions launched •</span>
        <span>Now serving clients across 3 continents</span>
      </div>
    </div>
  );
};

export default NewsTicker;
