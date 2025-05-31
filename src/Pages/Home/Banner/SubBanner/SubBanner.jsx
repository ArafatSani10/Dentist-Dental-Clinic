import React from "react";
import { FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

const SubBanner = () => {
  return (
    <div className="bg-[#020e61] text-white py-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Phone */}
        <div className="flex items-center gap-4 w-full md:w-1/3 justify-center">
          <FaPhoneAlt className="text-blue-400 text-4xl" />
          <div>
            <h4 className="text-lg font-semibold">Need Dental Services?</h4>
            <p className="text-sm text-gray-300">Call: +8801717-086313,</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-12 border-l border-gray-400 opacity-30" />

        {/* Hours */}
        <div className="flex items-center gap-4 w-full md:w-1/3 justify-center">
          <FaClock className="text-blue-400 text-4xl" />
          <div>
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <p className="text-sm text-gray-300">Everyday Open  4:00 PM - 10:00 PM</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-12 border-l border-gray-400 opacity-30" />

        {/* Email */}
        <div className="flex items-center gap-4 w-full md:w-1/3 justify-center">
          <FaEnvelope className="text-blue-400 text-4xl" />
          <div>
            <h4 className="text-lg font-semibold">Email Us</h4>
            <p className="text-sm text-gray-300">    dr.rasheduzzaman@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
