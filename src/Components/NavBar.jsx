import React, { useState } from "react";
import logo from "../assets/Images/Asset5.png"; // 🔹 Import your logo (adjust path if needed)

const NavBar = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="top-0 bg-white shadow-md flex items-center justify-between px-6 py-3 ">
        
        {/* Logo Left */}
        <div className="flex items-center">
          <a href="#home">
            <img 
              src={logo} 
              alt="Shehrity Logo" 
              className="h-14 w-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
          </a>
        </div>
<ul className="flex space-x-8 text-gray-900 font-medium justify-center text-center ">
  <li>
    <a
      href="#home"
      className="relative p-3  after:absolute after:w-0 after:h-[2px] after:bg-blue-800  after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      Home
    </a>
  </li>
  <li>
    <a
      href="#about"
      className="relative py-3 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-800  after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      About
    </a>
  </li>
  <li>
    <a
      href="#services"
      className="relative py-3 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-800 after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      Services
    </a>
  </li>
  <li>
    <a
      href="#contact"
      className="relative py-3  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-800 after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      Contact
    </a>
  </li>
</ul>

{/* Right Button */}
<button
  onClick={() => setShowVideo(true)}
  className="bg-blue-700 text-white px-6 py-2 rounded-full hover:rounded-xl hover:bg-blue-800 transition-all duration-300 rounded-pill"
>
  Switch to Digital Security
</button>
      </nav>

      {/* Fullscreen Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Fullscreen Video */}
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // 🔹 Replace with your video file
            autoPlay
            controls
            className="w-full h-full object-cover"
          />

          {/* Skip Button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Skip
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
