import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Services data
const services = [
  {
    title: "General Dentistry",
    description: "Complete oral care for every smile with cleanings, exams, and more.",
    icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-1.png",
    link: 'services/General',
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with whitening, veneers, and aesthetic treatments.",
    icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-2.png",
    link:'services/cosmetic',
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle and friendly dental care tailored for children and teens.",
    icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-3.png",
    link:'services/pediatric',
  },
  {
    title: "Restorative Dentistry",
    description: "Rebuild and restore your smile with crowns, bridges, and implants.",
    icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-4.png",
    link:'services/restorative%20'
  },
];

// Container animation
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card animation with opacity and zoom for more polish
const cardVariant = {
  hidden: { y: 80, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

const slugify = (title) => title.toLowerCase().replace(/\s+/g, "-");

const OurServices = () => {
  return (
    <div className="bg-purple-50 py-16 px-4">
      {/* Section Heading */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-blue-500 font-semibold mb-2">Our Services</p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Complete Care for Every Smile
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          From routine cleanings to advanced restorations, we provide personalized dental
          solutions for patients of all ages.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 items-start hover:shadow-xl transition-all duration-300 group"
          >
            <img src={service.icon} alt={service.title} className="w-14" />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 flex-grow">{service.description}</p>
            <Link
              to={service.link}
              className="text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-2 font-medium"
            >
              Read more <FaPlus size={12} />
            </Link>

          </motion.div>
        ))}
      </motion.div>

      {/* CTA button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          View All Services
        </motion.button>
      </div>
    </div>
  );
};

export default OurServices;
