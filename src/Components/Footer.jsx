import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const location = useLocation();
  const isDigital = location.pathname === "/digital-security";

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <FaLinkedin />, color: "#0A66C2" },
    { name: "Twitter", href: "#", icon: <FaTwitter />, color: "#1DA1F2" },
    { name: "YouTube", href: "#", icon: <FaYoutube />, color: "#FF0000" },
    { name: "Instagram", href: "#", icon: <FaInstagram />, color: "#E4405F" },
  ];

  const serviceLinks = [
    "Armed & Unarmed Guard Protection",
    "Cyber Security",
    "Security Camera/Alarm Monitoring Services",
    "Drone Security",
  ];

  const usefulLinks = [
    "About Us",
    "Our Services",
    "Get A Quote",
    "Contact Us",
    "Careers",
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+1 (844) 388-0988', href: 'tel:+18443880988' },
    { icon: <FaEnvelope />, text: 'info@shehrity.com', href: 'mailto:info@shehrity.com' },
    { icon: <FaGlobe />, text: 'www.shehrity.com', href: 'https://www.shehrity.com' },
  ];

  return (
    <footer className="text-gray-300 font-sans bg-[#15487d]">
      
      {/* Top Social Bar */}
      

      {/* Main Footer Content */}
      <div className="container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <img src="/assets/Images/Asset5.png" alt="Shehrity Logo" className="h-20 mb-4" />
            <p className="text-md leading-relaxed hover:text-blue-300 transition duration-300 cursor-pointer transform hover:-translate-y-1">
              Our team includes doormen, bodyguards, and patrol officers with over 15 years of combined experience.
            </p>
        <div>
         
          <div className="flex space-x-5 py-4 align-items-end">
            {socialLinks.map((link) => (
              <div key={link.name} className="relative group">
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm px-2 py-1 rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition">
                  {link.name}
                </span>

                {/* Icon button */}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-300 border border-red-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white ml-8 hover:text-blue-400 transition duration-300 cursor-pointer transform hover:-translate-y-1">
              Services We Offer
            </h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li
                  key={link}
                  className="flex items-center text-white transition duration-300 cursor-pointer transform hover:-translate-y-1 hover:text-blue-300"
                >
                  <a
                    href="#"
                    className="!no-underline text-white transition !duration-300 transform !hover:-translate-y-1 hover:!text-blue-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white ml-8 hover:text-blue-400 transition duration-300 cursor-pointer transform hover:-translate-y-1">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm">
              {usefulLinks.map((link) => (
                <li
                  key={link}
                  className="flex items-center text-white transition duration-300 cursor-pointer transform hover:-translate-y-1 hover:text-blue-300"
                >
                  <a
                    href="#"
                    className="!no-underline text-white transition duration-300 transform hover:-translate-y-1 hover:!text-blue-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white ml-8 hover:text-blue-400 transition duration-300 cursor-pointer transform hover:-translate-y-1">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              {contactInfo.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center text-white transition duration-300 cursor-pointer transform hover:-translate-y-1 hover:text-blue-300"
                >
                  <span className="mr-3">{item.icon}</span>
                  <a
                    href={item.href}
                    className="!no-underline text-white transition duration-300 hover:!text-blue-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="container mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="hover:text-blue-300 transition duration-300 cursor-pointer transform hover:-translate-y-1">
            Copyright &copy; {new Date().getFullYear()} Shehrity. All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a
              href="#"
              className="!no-underline text-white transition duration-300 transform hover:-translate-y-1 hover:!text-blue-300"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="!no-underline text-white transition duration-300 transform hover:-translate-y-1 hover:!text-blue-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
