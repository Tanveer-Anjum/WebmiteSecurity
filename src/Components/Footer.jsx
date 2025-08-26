import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
    { name: 'Twitter', href: '#', icon: <FaTwitter /> },
    { name: 'YouTube', href: '#', icon: <FaYoutube /> },
    { name: 'Instagram', href: '#', icon: <FaInstagram /> },
  ];

  const serviceLinks = [
    "Armed & Unarmed Guard Protection",
    "Cyber Security",
    "Security Camera/Alarm Monitoring Services",
    "Drone Security",
  ];

  const usefulLinks = ["About Us", "Our Services", "Get A Quote", "Contact Us", "Careers"];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+1 (844) 388-0988', href: 'tel:+18443880988' },
    { icon: <FaEnvelope />, text: 'info@shehrity.com', href: 'mailto:info@shehrity.com' },
    { icon: <FaGlobe />, text: 'www.shehrity.com', href: 'https://www.shehrity.com' },
  ];

  return (
    <footer className="bg-blue-900 text-gray-300 font-sans">
      
      {/* Top Social Bar */}
      <section className=" border-b border-white px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <img src="/assets/Images/Asset5.png" alt="Shehrity Logo" className="h-20 mb-4" />
            <p className="text-md leading-relaxed">
              Our team includes doormen, bodyguards, and patrol officers with over 15 years of combined experience.
            </p>
          </div>
        <div className="flex space-x-3 px-12 py-4">
          {socialLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-blue-300 hover:text-white transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo & About */}
        








          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-decoration-none ml-8">Services We Offer</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#" className="hover:underline hover:text-blue-700  transition text-decoration-none text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white ml-8">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              {usefulLinks.map(link => (
                <li key={link}>
                  <a href="#" className="hover:underline hover:text-blue-400 transition text-white text-decoration-none">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white ml-8">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              {contactInfo.map(item => (
                <li key={item.text} className="flex items-center text-decoration-none text-white">
                  <span className="mr-3 text-decoration-none text-white">{item.icon}</span>
                  <a href={item.href} className="hover:text-blue-400 transition  text-decoration-none text-white">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            Copyright &copy; {new Date().getFullYear()} Shehrity. All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition text-white text-decoration-none">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-400 transition  text-white text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
