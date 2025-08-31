import React from "react";

const Head = ({ title, currentPage }) => {
  return (
    <div className="bg-gray-100 py-16 text-center relative">
      {/* Background watermark pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-gray-400 text-[10rem] font-bold select-none">
        {/* You can replace with your logo or SVG */}
        ⚙️
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-900" style={{ fontFamily: "Arial, sans-serif" }}>{title}</h1>
        <p className="mt-4 text-gray-600">
          <a href="/" className="text-blue-600 hover:underline "  style={{ fontFamily: "Arial, sans-serif" }}>
            Home
          </a>{" "}
          <span className="mx-2">{">"}</span>
          <span className="text-gray-800">{currentPage}</span>
        </p>
      </div>
    </div>
  );
};

export default Head;
