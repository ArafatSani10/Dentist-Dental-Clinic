import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: "Happy Patients", value: 5000 },
  { label: "Teeth Whitened", value: 2500 },
  { label: "Dental Implants", value: 800 },
  { label: "Years of Experience", value: 15 },
];

const Ability = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="w-full bg-blue-800 text-white py-16 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {inView && <CountUp start={1} end={item.value} duration={2} />}+
            </h1>
            <p className="text-sm md:text-base font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ability;
