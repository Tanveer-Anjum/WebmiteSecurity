import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../assets/Images/girls.jpg"; 
import smallImg from "../assets/Images/girls.jpg"; 
import { FaFingerprint } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
{/* Images with scroll-triggered animations */}
<motion.div
  className="relative flex justify-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
  transition={{ duration: 5 }}
>
  <img
    src={sampleImg}
    alt="Why Choose Us"
    className="rounded-xl shadow-lg w-full max-w-md"
  />


  <motion.div
    className="absolute -bottom-10 -left-10 w-40 h-32 rounded-xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, x: -30, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
  
    animate={{ y: [0, -10, 0] }} 
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
  >
    <div className="overflow-hidden rounded-lg group">
      <img
        src={smallImg}
        alt="24/7 Support"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-blue-800 bg-opacity-70 flex flex-col items-center align-items-end justify-center text-white text-center p-1">
      <h4 className="font-bold text-lg flex items-center justify-center">
        <FaFingerprint />24/7 Support
      </h4>
      <p className="text-sm">Security & Technology Partner</p>
    </div>
  </motion.div>
</motion.div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-primary fw-semibold mb-2 fs-5 flex gap-2 items-center"
                    >
                        <span className="text-blue-700 font-semibold px-3 py-1 rounded-full text-sm flex gap-2">
                            <FaFingerprint /> Why Choose Us
                        </span>
                    </motion.h3>

                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        WE'RE QUALIFIED & PROFESSIONAL
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-gray-600 mb-6"
                    >
                        Shehrity is a premier private security company based in the state of
                        Ohio, with our main office located in Columbus. We are dedicated to
                        providing top-notch security services to our clients, ensuring their
                        safety and peace of mind at all times.
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="space-y-3 text-lg font-medium text-gray-800"
                    >
                        {["Security Consulting", "Private Security", "Close Protections", "Guard House", "Always Honest"].map((item, idx) => (
                            <li key={idx} className="flex items-center">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2">
                                    ✔️
                                </span>
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
