import React, { useState } from "react";
import logo from "/assets/Images/Asset5.png"; // 🔹 Import your logo (adjust path if needed)

const NavBar = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
   
      <nav className="top-0 bg-white shadow-md flex items-center justify-between px-6 py-3 ">
        
     
        <div className="flex items-center">
          <a href="#home">
            <img 
              src={logo} 
              alt="Shehrity Logo" 
              className="h-14 w-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
          </a>
        </div>
<ul className="flex space-x-8 font-medium justify-center text-center ">
  <li>
    <a
      href="#about"
      className="relative py-3 after:content-[''] after:absolute after:w-0  !text-gray-500 after:h-[2px] after:bg-gray-600  after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      Home
    </a>
  </li>
  <li>
    <a
      href="#about"
      className="relative py-3 after:content-[''] after:absolute after:w-0  !text-gray-500 after:h-[2px] after:bg-gray-600  after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      About
    </a>
  </li>
  <li>
    <a
      href="#services"
      className="relative py-3 after:content-[''] after:absolute after:w-0  !text-gray-500 after:h-[2px] after:bg-gray-600 after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      Services
    </a>
  </li>
  <li>
    <a
      href="#contact"
      className="relative py-3  after:content-[''] after:absolute after:w-0  !text-gray-500 after:h-[2px] after:bg-gray-600 after:left-0 after:bottom-1 after:transition-all after:duration-300 hover:after:w-full text-decoration-none"
    >
      Contact
    </a>
  </li>
</ul>


<button
  onClick={() => setShowVideo(true)}
  className="bg-[#15487d] text-white px-6 py-2 rounded-full hover:rounded-xl  hover:bg-blue-900 transition-all duration-300 rounded-pill"
>
  Switch to Digital Security
</button>
      </nav>

    
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
