import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../assets/Images/girls.jpg"; // replace with your actual image
import smallImg from "../assets/Images/girls.jpg"; // you can use another small image
import { Icon } from "lucide-react";
import { FaFingerprint } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

                {/* Left Image Section */}
             <motion.div
  animate={{ y: [2, 15, 2], x: [12, -10, 12] }}
  transition={{
    duration: 5,      
    repeat: Infinity,  
    repeatType: "loop",
    ease: "easeInOut",  
  }}
                    className="relative flex justify-center"
                >
                    {/* Main Image */}
                    <img
                        src={sampleImg}
                        alt="Why Choose Us"
                        className="rounded-xl shadow-lg w-full max-w-md"
                    />

                    {/* Small Floating Image with Overlay */}
                    <motion.div
                        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 w-40 h-32 rounded-xl overflow-hidden shadow-lg"
                    >
                        <div className="overflow-hidden rounded-lg group">
                            <img
                                src={smallImg}
                                alt="24/7 Support"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-blue-800 bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-1 ">
                           
                            <h4 className="font-bold text-lg flex "><FaFingerprint />24/7 Support</h4>
                            <p className="text-sm">Security & Technology Partner</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex gap-3">
                    <h3 class="text-primary fw-semibold mb-2 fs-5 flex  gap-2">
                    <FaFingerprint />
                        Why Choose Us
                    </h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        WE'RE QUALIFIED & PROFESSIONAL
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Shehrity is a premier private security company based in the state of
                        Ohio, with our main office located in Columbus. We are dedicated to
                        providing top-notch security services to our clients, ensuring their
                        safety and peace of mind at all times.
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 text-lg font-medium text-gray-800">
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2">
                                ✔️
                            </span>
                            Security Consulting
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2">
                                ✔️
                            </span>
                            Private Security
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2">
                                ✔️
                            </span>
                            Close Protections
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2">
                                ✔️
                            </span>
                            Guard House
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-2">
                                ✔️
                            </span>
                            Always Honest
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
