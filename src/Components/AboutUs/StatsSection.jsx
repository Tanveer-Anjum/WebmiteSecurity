import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Calendar, Shield, Clock, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: 40, suffix: "+", label: "Years Experience", icon: Calendar },
    { number: 500, suffix: "+", label: "Clients Protected", icon: Shield },
    { number: 24, suffix: "/7", label: "Response Time", icon: Clock },
    { number: 100, suffix: "%", label: "Success Rate", icon: Award },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8 mb-20 ">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }} // animation runs once
        >
          {/* Icon Circle */}
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-110" style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}>
            <stat.icon className="w-10 h-10 text-white" />
          </div>

          {/* Number Animation */}
          <div className="text-3xl font-bold text-gray-900 mb-2">
            <CountUp
              start={0}
              end={stat.number}
              duration={3}
              enableScrollSpy
              scrollSpyDelay={100}
            />
            {stat.suffix}
          </div>

          {/* Label */}
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;
