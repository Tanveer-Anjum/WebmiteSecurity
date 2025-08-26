import React from "react";
import "./NewsUpdate.css";

const NewsTicker = () => {
  return (
    <div className="ticker-container bg-[#0e38b1] text-white py-2">
      <div className="ticker-content">
        <span style={{ margin: "0 150px" }}>📢</span>
        <span style={{ margin: "0 120px" }}>🚨</span>
        <span style={{ margin: "0 120px" }}>🌍</span>

      </div>
    </div>
  );
};

export default NewsTicker;
