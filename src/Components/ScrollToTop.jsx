import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-3 left-6 w-15 h-15 flex items-center justify-center rounded-circle  text-black hover:bg-blue-500 hover:text-white transition "
    >
      {/* Arrow */}
      <span className="text-2xl">↑</span>

      {/* Circular Progress (SVG) */}
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="lightgray"
          strokeWidth="4"
          fill="transparent"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="blue"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={2 * Math.PI * 24}
          strokeDashoffset={2 * Math.PI * 24 - (scrollProgress / 100) * (2 * Math.PI * 24)}
          className="transition-all duration-150"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
