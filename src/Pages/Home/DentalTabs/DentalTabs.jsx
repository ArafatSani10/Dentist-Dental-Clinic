import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  "Root Canal Specialist",
  "Alignment Specialist",
  "Cosmetic Dentistry",
  "Live Dental Advisory",
];

const tabContents = [
  {
    title: "Fast, Professional Dental Treatments",
    subtitle:
      "Experience gentle and efficient dental care tailored to every patient's unique needs.",
    description:
      "From routine checkups to advanced procedures, our experienced team ensures each treatment is comfortable, timely, and effective. We combine modern tools with a patient-first approach to keep your smile healthy and bright.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2020/12/h1-tabs-img-1.jpg",
  },
  {
    title: "Precise Orthodontic Alignment",
    subtitle:
      "Expert alignment services to help you achieve a healthier, more confident smile.",
    description:
      "Our orthodontists use cutting-edge methods to correct bite issues and align your teeth comfortably. Whether you're considering braces or clear aligners, we provide personalized care with beautiful results.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2020/12/h1-tabs-img-2.jpg",
  },
  {
    title: "Enhance Your Smile with Cosmetic Dentistry",
    subtitle:
      "Bring out your best smile with treatments designed for beauty and confidence.",
    description:
      "We offer teeth whitening, veneers, bonding, and more — all tailored to enhance the appearance of your smile. Our cosmetic experts focus on both aesthetics and health for natural-looking, lasting results.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2021/01/h1-tabs-img-3.jpg",
  },
  {
    title: "Live Dental Advisory & Support",
    subtitle:
      "Talk to our dental experts anytime for advice, support, or emergency guidance.",
    description:
      "Got a question or concern? Our live advisory service connects you directly with dental professionals who are ready to assist — whether it’s urgent care or routine questions, we’re here for you.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2020/12/h1-tabs-img-4.jpg",
  },
];


export default function DentalTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-10 pb-2 scroll-smooth">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-4 py-2 text-sm sm:text-base font-medium rounded-full transition duration-300 min-w-fit
                ${activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-700 hover:bg-blue-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text */}
          <motion.div
            key={activeTab + "_text"}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {tabContents[activeTab].title}
            </h2>
            <p className="text-lg text-blue-700 mb-4">
              {tabContents[activeTab].subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {tabContents[activeTab].description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            key={activeTab + "_img"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <img
                src={tabContents[activeTab].image}
                alt={tabs[activeTab]}
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
