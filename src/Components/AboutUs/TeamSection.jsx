import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: "../assets/Images/44.jpg", // replace with real images
    },
    {
      name: "Jane Smith",
      role: "Developer",
      image: "../assets/Images/security.jpeg",
    },
    {
      name: "Mike Johnson",
      role: "Designer",
      image: "../assets/Images/1122.jpg",
    },
    {
      name: "Sarah Lee",
      role: "Marketing",
      image: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <div className="mb-20">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Our Team
        </div>
        <h2 className="text-4xl font-bold text-gray-900">
          Meet With Our Expert Team
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-1"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />

            {/* Overlay with Social Icons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
