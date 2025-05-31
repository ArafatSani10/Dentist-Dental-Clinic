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
    title: "Fast & professional treatments for every patient",
    subtitle:
      "Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd mi auctor.",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit am maur. Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2020/12/h1-tabs-img-1.jpg",
  },
  {
    title: "Expert orthodontic alignment services",
    subtitle:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
    description:
      "Our alignment specialists help ensure your bite and smile are properly aligned with modern techniques and care.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2020/12/h1-tabs-img-2.jpg",
  },
  {
    title: "A confident smile through cosmetic dentistry",
    subtitle:
      "Enhance your appearance with expert cosmetic treatments tailored just for you.",
    description:
      "Whitening, veneers, bonding — our specialists use top-tier solutions for aesthetic excellence in dental care.",
    image:
      "https://allsmiles.qodeinteractive.com/wp-content/uploads/2021/01/h1-tabs-img-3.jpg",
  },
  {
    title: "Live dental advisory for every concern",
    subtitle:
      "Connect with expert dentists anytime for consultations and guidance.",
    description:
      "Whether it's emergency advice or regular consultation, our live dental advisors are available for prompt support.",
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
                ${
                  activeTab === index
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
