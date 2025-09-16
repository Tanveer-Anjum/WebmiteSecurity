import React from "react";
import { useNavigate } from "react-router-dom";
import transitionVideo from "../../../public/assets/Videos/intro.mp4";

const TransitionPage = ({ onFinish }) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    onFinish(); // set digital mode
    navigate("/"); // go back home
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative">
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        className="w-full h-full object-cover"
      >
        <source src={transitionVideo} type="video/mp4" />
      </video>

      {/* ✅ Skip Button (Top Right Corner) */}
      <button
        onClick={handleFinish}
        className="absolute top-40 right-6 px-6 py-2 bg-[#702829] text-white !font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
         style={{ borderRadius: "9999px", fontFamily: "Arial, sans-serif" }}
      >
        Skip
      </button>
    </div>
  );
};

export default TransitionPage;
