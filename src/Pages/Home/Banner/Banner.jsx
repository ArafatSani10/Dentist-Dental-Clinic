import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="relative -mt-32 w-full h-[600px] md:h-screen overflow-hidden">

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000f3d] via-[#001a5a80] to-transparent z-10" />

      {/* Content Over Image */}
      <div className="absolute z-20 mt-64 inset-0 flex items-center justify-start px-6 md:px-20 text-start">
        <div className="max-w-xl text-white space-y-5 animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Brighten Your Smile <br className="hidden md:block" /> with Expert Dental Care
          </h1>
          <p className="text-base md:text-lg drop-shadow-sm">
            Gentle hands, expert care — your comfort is our priority. Book your appointment today!
          </p>
          <button className="mt-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all rounded-full text-white font-semibold shadow-2xl">
            Book Appointment
          </button>

          {/* Star Rating */}
          <div className="flex items-center gap-1 pt-4 text-yellow-400">
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStarHalfAlt size={20} />
            <span className="text-white text-sm ml-2">(4.5/5 - 1,200+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Background Image Swiper */}
      <Swiper
        className="w-full h-full"
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
      >
        {[
          "https://i.ibb.co/Q37J4pSR/beautiful-girl-sitting-dentist-s-office.jpg",
          "https://i.ibb.co/Y7Bfyhw7/dentist-doing-check-up-patient.jpg",
          "https://i.ibb.co/ZR7GMd5Q/dentists-treat-patients-teeth-3.jpg",
          "https://i.ibb.co/mCDb4NF3/professional-specialist-visit-patient-healthy.jpg"
        ].map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Simple fadeInUp animation using Tailwind */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
