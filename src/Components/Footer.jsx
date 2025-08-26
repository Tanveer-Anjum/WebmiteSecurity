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
    <footer className="bg-blue-900 text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Logo & Social */}
          <div>
            <img src="../assets/Images/Asset5.png" alt="Shehrity Logo" className="h-16 mb-4" />
            <p className="text-white text-sm leading-relaxed hover:bg-blue-500">
              Our team includes doormen, bodyguards, and patrol officers with over 15 years of combined experience.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="w-8 h-8 bg-white text-blue-900 rounded flex items-center justify-center hover:bg-gray-200 transition no-underline">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services We Offer</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-white transition  text-decoration-none hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              {usefulLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-white transition text-decoration-none">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              {contactInfo.map(item => (
                <li key={item.text} className="flex items-center text-white">
                  <span className="mr-3">{item.icon}</span>
                  <a href={item.href} className="text-white transition text-decoration-none">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
    <div className="border-t border-white">
  <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
    <p className="text-white mb-2 md:mb-0">
      Copyright &copy; {new Date().getFullYear()} Shehrity. All Rights Reserved
    </p>
    <div className="flex space-x-6">
      <a href="#" className="text-white transition no-underline">Terms & Conditions</a>
      <a href="#" className="text-white hover:text-white transition no-underline">Privacy Policy</a>
    </div>
  </div>
</div>

    </footer>
  );
}
