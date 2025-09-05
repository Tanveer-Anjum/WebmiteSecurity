import { motion } from "framer-motion";

const ServiceCard = ({ title, description }) => {
  return (
      <motion.div
      className="border border-gray-300 rounded-2xl shadow-md py-12  p-6  hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2 ">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
