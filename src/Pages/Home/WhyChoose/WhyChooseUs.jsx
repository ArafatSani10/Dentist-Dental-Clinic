import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Experienced Dental", desc: "Skilled care backed by years of trusted dental experience." },
  { title: "Advanced Technology", desc: "Modern tools ensure accurate and efficient treatments." },
  { title: "Personalized Treatment", desc: "Custom care plans made to fit your smile and lifestyle." },
  { title: "Family-Friendly", desc: "Welcoming space for kids, teens, adults, and seniors." },
];

const imageVariants = {
  float: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-50 via-white to-blue-50 py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-indigo-600 font-semibold uppercase tracking-widest text-sm md:text-base">
            Why Choose Our Dental Care
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl">
            Exceptional Service <br /> With a Personal Touch
          </h2>
          <p className="text-gray-700 text-lg max-w-lg">
            Choosing the right dental provider matters. We combine expert care,
            advanced technology, and a warm atmosphere to ensure every visit is
            comfortable, efficient, and tailored to your unique needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-800">
            {features.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow cursor-default"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Collage */}
        <div className="relative flex justify-center items-center">
          {/* Big center image */}
          <motion.img
            src="https://madebydesignesia.com/themes/dentia/images/misc/p3.webp"
            alt="Dental Main"
            className="rounded-3xl shadow-2xl w-full  md:w-96 object-cover"
            variants={imageVariants}
            animate="float"
          />

          {/* Top-left small image */}
          <motion.img
            src="https://madebydesignesia.com/themes/dentia/images/misc/s2.webp"
            alt="Dental Small 1"
            className="absolute rounded-xl shadow-lg w-36 md:w-44 top-[-40px] left-[-40px] border-4 border-white object-cover"
            variants={imageVariants}
            animate="float"
            transition={{ delay: 0.5, duration: 5, repeat: Infinity }}
          />

          {/* Bottom-right small image */}
          <motion.img
            src="https://madebydesignesia.com/themes/dentia/images/misc/s3.webp"
            alt="Dental Small 2"
            className="absolute rounded-xl shadow-lg w-36 md:w-44 bottom-[-40px] right-[-40px] border-4 border-white object-cover"
            variants={imageVariants}
            animate="float"
            transition={{ delay: 1, duration: 5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
