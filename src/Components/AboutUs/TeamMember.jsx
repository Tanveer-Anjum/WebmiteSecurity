import React from 'react';
import { Users } from 'lucide-react';

const TeamMember = ({ name, position }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{name}</h3>
          <p className="text-blue-600 text-center font-medium">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;