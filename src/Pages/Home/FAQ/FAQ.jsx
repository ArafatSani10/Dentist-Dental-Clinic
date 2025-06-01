import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What dental services do you offer?',
    answer: 'We provide general dentistry, cosmetic treatments, orthodontics, emergency care, implants, and more.'
  },
  {
    question: 'Is teeth cleaning painful?',
    answer: 'Not at all. Professional cleaning is gentle, comfortable, and essential to maintain oral health.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes! We accept all major insurance providers. You can contact us to confirm your eligibility.'
  },
  {
    question: 'What safety measures do you follow?',
    answer: 'We maintain strict sterilization, use PPE, and follow ADA guidelines for patient and staff safety.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Gradient Circle */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image with soft drop-shadow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://img.freepik.com/free-vector/teeth-dental-care-medical-background_1017-17395.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_items_boosted&w=740"
            alt="Dental illustration"
            className="rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right FAQ Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-blue-900 mb-8"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                layout
                transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                className={`bg-blue-50/40 border border-blue-200 rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-sm ${
                  activeIndex === index ? 'ring-1 ring-blue-300' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-blue-900 text-lg font-semibold hover:bg-blue-100/30 transition duration-200"
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? <Minus size={22} /> : <Plus size={22} />}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-blue-800 text-[15px] leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
