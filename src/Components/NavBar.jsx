import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // for hamburger & close icons
import logo from "/assets/Images/Asset5.png";
import NewsTicker from "./NewsUpdate/NewsTicker";

const NavBar = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* News Ticker on top */}
      <NewsTicker />

      {/* Navbar */}
      <nav className="top-0 bg-white shadow-md flex items-center justify-between px-6 py-3 z-40">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img
              src={logo}
              alt="Shehrity Logo"
              className="h-14 w-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium  !text-decoration-none">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative py-3 after:content-[''] after:absolute after:w-0 !text-gray-500 after:h-[2px] after:bg-gray-600 after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full !no-underline  !text-decoration-none "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => setShowVideo(true)}
          className="hidden md:block bg-[#15487d] text-white px-6 p hover:rounded-xl hover:bg-blue-900 transition-all rounded-full duration-300 md:rounded-full sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium"
        >
          Switch to Digital Security
        </button>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Links */}
        <ul className="flex flex-col space-y-6 mt-16 px-6 font-medium">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-[#15487d] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="mt-8 px-6">
          <button
            onClick={() => {
              setShowVideo(true);
              setMenuOpen(false);
            }}
            className="w-full bg-[#15487d] text-white px-6 py-2 rounded-full hover:rounded-xl hover:bg-blue-900 transition-all duration-300"
          >
            Switch to Digital Security
          </button>
        </div>
      </div>

      {/* Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center w-full h-full justify-center overflow-hidden">
          <video
            src="../assets/Videos/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-[#15487d] text-white px-4 py-2 rounded hover:bg-red-900"
          >
            Skip to Side
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
