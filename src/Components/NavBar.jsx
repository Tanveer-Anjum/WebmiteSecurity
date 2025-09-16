import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/Images/Asset5.png";

const NavBar = ({ handleSecuritySwitch, isDigitalSecurityActive }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Digital route flag
  const isDigital = location.pathname === "/digital-security";

  const isSpecialPage = [
    "/about",
    "/digital-security",
    "/physical-security",
    "/career",
    "/contact",
  ].includes(location.pathname);

  return (
    <>
      {/* Navbar */}
 <nav
  className={`!fixed left-0 right-0 z-50 flex items-center justify-center px-6 py-2 whitespace-nowrap transition-all duration-300 h-[80px]
    ${isScrolled || isSpecialPage 
      ? "bg-white border-b border-gray-200 text-black top-8"   // ✅ white bg + black text for special pages
      : "backdrop-blur-md bg-white/10 border-b border-white/20 text-white top-8" // ✅ transparent bg + white text on Home
    }`}
>
        {/* Logo - positioned absolutely to the left */}
        <div className="absolute left-6 flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Shehrity Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
          </Link>
        </div>

        {/* Desktop Menu - centered */}
      <ul
  className={`hidden md:flex items-center gap-8 font-semibold !mt-4  text-sm transition-colors duration-300  ${
    isScrolled ? "text-black" : "text-gray-800"
  }`
  
  }
    style={{ fontFamily: "Arial, sans-serif" }}
>
  {["Home", "About", "Services", "Contact", "Career"].map((item, idx) => (
    <li key={idx}>
      {item === "Services" ? (
        <div className="relative group">
          <button
            className={`relative py-3 hover:after:w-full !no-underline after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-1 after:transition-all after:duration-300 ${
              isScrolled || isSpecialPage
                ? "text-black after:bg-black"
                : "text-white after:bg-white"
            }`}
            style={{ fontFamily: "Arial, sans-serif" }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            Services
          </button>
          {servicesDropdown && (
           <div
  className="absolute top-[90%] left-0 mt-0 w-48 bg-gray-200 shadow-lg rounded-md border border-gray-200 py-2 z-50"
  onMouseEnter={() => setServicesDropdown(true)}
  onMouseLeave={() => setServicesDropdown(false)}
>
  <Link
    to="/physical-security"
    className="relative block px-4 py-2 text-black hover:after:w-full !no-underline 
               after:content-[''] after:absolute after:w-0 after:h-[2px] 
               after:left-0 after:bottom-1 after:transition-all after:duration-300 after:bg-black"
  >
    Physical Security
  </Link>
  <Link
    to="/digital-security"
    className="relative block px-4 py-2 text-black hover:after:w-full !no-underline 
               after:content-[''] after:absolute after:w-0 after:h-[2px] 
               after:left-0 after:bottom-1 after:transition-all after:duration-300 after:bg-black"
  >
    Digital Security
  </Link>
</div>
          )}
        </div>
      ) : (
        <Link
          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        className={`relative py-3 hover:after:w-full !no-underline 
  after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-1 
  after:transition-all after:duration-300
  ${isScrolled || isSpecialPage 
    ? "text-black after:bg-black" 
    : "text-white after:bg-white"
  }`}

        >
          {item}
        </Link>
      )}
    </li>
  ))}
</ul>


        {/* Desktop Button - positioned absolutely to the right */}


        {/* Hamburger for Mobile - positioned absolutely to the right */}
        <button
          className="md:hidden absolute top-[24px] right-6  transition-colors text-[#15487d]"
          onClick={() => setMenuOpen(true)}>
          <FaBars className="text-3xl" />
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-10 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-sm text-gray-700"
          onClick={() => setMenuOpen(false)}>
          <FaTimes className="text-3xl" />
        </button>

        {/* Links */}
        <ul className="flex flex-col mt-16 px-6 font-semibold text-sm ">
          {["Home", "About", "Contact", "Career"].map((item, idx) => (
            <li key={idx}>
              <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative py-3 hover:after:w-full !no-underline after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-1 after:transition-all after:duration-300 after:bg-black block !text-gray-800 hover:text-[#15487d] transition  text-sm"
                onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
          <li>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-md font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-2">
                Services
              </h3>
              <div className="pl-4 space-y-2">
                <Link
                  to="/physical-security"
                  className="relative hover:after:w-full !no-underline after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-1 after:transition-all after:duration-300 text-black after:bg-black block py-2 text-gray-700 hover:text-[#15487d] transition-colors"
                  onClick={() => setMenuOpen(false)}>
                  Physical Security
                </Link>
                <Link
                  to="/digital-security"
                  className="relative hover:after:w-full !no-underline after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-1 after:transition-all after:duration-300 text-black after:bg-black block py-2 text-gray-700 hover:text-[#15487d] transition-colors"
                  onClick={() => setMenuOpen(false)}>
                  Digital Security
                </Link>
              </div>
            </div>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="mt-6 px-6">
          {isDigitalSecurityActive ? (
            <button
              onClick={() => {
                handleSecuritySwitch(false);
                setMenuOpen(false);
              }}
              className="w-full text-white px-6 py-2 transition-all duration-300 bg-[#15487d] hover:bg-blue-900"
              style={{ borderRadius: "9999px" }}>
              Switch to Physical Security
            </button>
          ) : (
            <button
              onClick={() => {
                setShowVideo(true);
                setMenuOpen(false);
                handleSecuritySwitch(true);
              }}
              className="w-full text-white px-6 py-2 transition-all duration-300 bg-[#15487d] hover:bg-blue-900"
              style={{ borderRadius: "9999px" }}>
              Switch to Digital Security
            </button>
          )}
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
          {isDigitalSecurityActive && (
            <button
              onClick={() => setShowVideo(false)}
              className="absolute bottom-8 right-4 text-white px-4 py-2 rounded-full transition bg-[#15487d] hover:bg-red-900">
              Skip to Side
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;
