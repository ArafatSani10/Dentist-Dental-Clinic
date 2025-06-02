import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaHeartbeat, FaGraduationCap, FaHandHoldingHeart, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Hossain.",
    feedback:
      "Dr. Rasheduzzaman's calm approach and deep expertise truly set him apart. I felt taken care of from start to finish.",
  },
  {
    name: "Redoy.",
    feedback:
      "Fantastic experience! The clinic is clean, modern, and the entire staff is friendly and professional.",
  },
  {
    name: "Ali .",
    feedback:
      "He explained every procedure clearly. I finally found a dentist I can trust completely. Highly recommend!",
  },
];

const credentials = [
  "Doctor of Dental Surgery (DDS)",
  "Certified in Advanced Cosmetic Dentistry",
  "Member of American Dental Association",
  "Diplomate, International Congress of Oral Implantologists",
  "Advanced Training in Laser Dentistry"
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-hidden">
      {/* Hero with Parallax Effect */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1588776814546-ec7d2fe3d7e0?auto=format&fit=crop&w=1470&q=80)",
              backgroundAttachment: "fixed"
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/70 to-blue-900/90" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Meet <span className="text-blue-300">Dr. Rasheduzzaman </span>
          </h1>
          <div className="h-1 w-24 bg-blue-400 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-blue-100 font-light">
            Transforming smiles with compassion, precision, and care
          </p>
        </motion.div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-5 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/cWz835r/Picsart-25-05-28-00-31-47-015-1.jpg"
                  alt="Dr. Rasheduzzaman"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white">Dr. Rasheduzzaman </h3>
                  <p className="text-blue-200">Principal Dental Surgeon</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-10">
                <div className="text-5xl text-blue-600 font-bold">15+</div>
                <div className="text-blue-900 font-medium">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Who is <span className="text-blue-500">Dr. Rasheduzzaman ?</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dr. Rasheduzzaman is a leading dental surgeon known for blending advanced dental technologies with a warm, human touch. With years of experience and a passion for perfection, he has helped countless patients regain their smiles and confidence.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="text-blue-500 mt-1 mr-3">
                    <FaHeartbeat size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Patient-Centered</h4>
                    <p className="text-gray-600 text-sm">Individualized care plans</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-500 mt-1 mr-3">
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Expertise</h4>
                    <p className="text-gray-600 text-sm">Continuous education</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-500 mt-1 mr-3">
                    <FaStar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Excellence</h4>
                    <p className="text-gray-600 text-sm">Award-winning techniques</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-500 mt-1 mr-3">
                    <FaHandHoldingHeart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Compassion</h4>
                    <p className="text-gray-600 text-sm">Gentle, understanding care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy and Credentials */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaHandHoldingHeart className="text-blue-600" />
                </span>
                Philosophy of Care
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                His approach is simple: listen carefully, treat ethically, and ensure every patient leaves more confident than they came. From regular checkups to advanced procedures, every treatment is tailored to each individual.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-blue-800 text-xl mb-3">Our Promise to You</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Pain-free treatment experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Transparent pricing & no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Latest technology for precision care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Emergency dental care availability</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-blue-600" />
                </span>
                Education & Credentials
              </h2>

              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>

                <div className="mb-10 relative">
                  <div className="absolute -left-11 top-1 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-xl text-blue-800 mb-2">Professional Credentials</h3>
                  <ul className="space-y-2">
                    {credentials.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -left-11 top-1 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-xl text-blue-800 mb-2">Why Patients Trust Him</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Dr. Rasheduzzaman combines top-tier education, continuous learning, and gentle patient communication to create a stress-free and satisfying dental experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3845731/pexels-photo-3845731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smiles We've Transformed
            </h2>
            <div className="h-1 w-24 bg-blue-400 mx-auto"></div>
            <p className="mt-6 text-blue-200 max-w-2xl mx-auto">
              Hear from our patients about their experiences at our clinic
            </p>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            autoplay={{ delay: 7000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-xl h-full"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-yellow-400 mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-lg mb-6">
                    “{item.feedback}”
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <h4 className="text-blue-900 font-bold ml-4">— {item.name}</h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center mt-12 space-x-2"></div>
        </div>
      </section>

 
    </div>
  );
};

export default About;