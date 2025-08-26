import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../../assets/Images/girls.jpg";
import city2 from "../../assets/Images/12.jpg";
import city3 from "../../assets/Images/girls.jpg";
import city4 from "../../assets/Images/13.png";
import city5 from "../../assets/Images/22.jpg";
import { FaFingerprint } from "react-icons/fa";

const Service = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
    );
  };

  const images = [city1, city2, city3, city4, city5];
  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1.2, zIndex: 7 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 2 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="bg-blue-700 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-6xl flex flex-col items-center relative">
        {/* Text with scroll animation */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-center mb-2">
            <h3 className="text-white font-semibold fs-5 flex gap-2 items-center">
              <FaFingerprint /> Our Service
            </h3>
          </div>
          <motion.h2
            className="text-white text-3xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SMART SECURITY SERVICE FOR YOUR
            <br />
            LIVE SAFETY
          </motion.h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full flex justify-center items-center h-[400px]">
          {/* Left Button */}
          <button
            onClick={handleBack}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-indigo-400 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-500 transition z-10"
          >
            &#8592;
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-indigo-400 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-500 transition z-10"
          >
            &#8594;
          </button>

          {/* Images */}
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`image-${index}`}
              className="rounded-[12px] absolute"
              style={{ width: "40%" }}
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
