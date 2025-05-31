import React from "react";
import { FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

const SubBanner = () => {
  return (
    <div className="bg-[#020e61] text-white py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Phone */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <FaPhoneAlt className="text-blue-400 text-3xl md:text-4xl" />
          <div>
            <h4 className="text-lg font-semibold">Need Dental Services?</h4>
            <p className="text-sm text-gray-300">Call: +8801717-086313</p>
          </div>
        </div>

        {/* Divider for mobile */}
        <hr className="block md:hidden border-gray-600 opacity-20" />

        {/* Hours */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <FaClock className="text-blue-400 text-3xl md:text-4xl" />
          <div>
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <p className="text-sm text-gray-300">Everyday 4:00 PM - 10:00 PM</p>
          </div>
        </div>

        {/* Divider for mobile */}
        <hr className="block md:hidden border-gray-600 opacity-20" />

        {/* Email */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <FaEnvelope className="text-blue-400 text-3xl md:text-4xl" />
          <div>
            <h4 className="text-lg font-semibold">Email Us</h4>
            <p className="text-sm text-gray-300">dr.rasheduzzaman@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
