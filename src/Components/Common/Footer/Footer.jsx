import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1b1d2c] via-[#2b1c49] to-[#221b31] text-white pt-20 pb-14 px-6 md:px-16 lg:px-24 overflow-hidden select-none">
      {/* Radial Glow Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-700/15 via-transparent to-transparent z-0" />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 relative z-10">
        {/* Logo + About */}
        <div className="space-y-6">
          <img
            className="w-[120px] md:w-[140px] object-contain"
            src="https://i.ibb.co/7dDj9zvr/download-14.png"
            alt="Dentia Logo"
          />
          <p className="text-gray-300 text-base leading-relaxed font-sans max-w-sm">
            At Dentia, we’re dedicated to high-quality, personalized dental care
            for all ages. Our team uses advanced technology to ensure comfort
            and long-lasting smiles.
          </p>
          <div className="flex gap-5 mt-4">
            {[FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social media"
                  className="p-3 group bg-white/10 hover:bg-purple-700/30 border border-white/20 hover:border-purple-500 rounded-full transition duration-300 flex items-center justify-center shadow-md hover:shadow-purple-600 cursor-pointer"
                >
                  <Icon className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-5 relative inline-block text-white after:content-[''] after:block after:h-[3px] after:w-12 after:bg-purple-500 after:rounded-full after:mt-2">
            Company
          </h3>
          <ul className="space-y-3 text-gray-300 text-base font-sans">
            {["Home", "Services", "Dentist", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white transition duration-250 cursor-pointer hover:underline decoration-purple-500 underline-offset-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5 relative inline-block text-white after:content-[''] after:block after:h-[3px] after:w-12 after:bg-purple-500 after:rounded-full after:mt-2">
            Services
          </h3>
          <ul className="space-y-3 text-gray-300 text-base font-sans">
            {[
              "General Dentistry",
              "Pediatric Dentistry",
              "Orthodontics",
              "Cosmetic Dentistry",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-white transition duration-250 cursor-pointer hover:underline decoration-purple-500 underline-offset-4"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5 relative inline-block text-white after:content-[''] after:block after:h-[3px] after:w-12 after:bg-purple-500 after:rounded-full after:mt-2">
            Contact Us
          </h3>
          <ul className="space-y-6 text-base text-gray-300 font-sans">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple-400 mt-1 text-lg flex-shrink-0" />
              <div>
                <span className="text-white font-semibold block mb-1">
                  Clinic Location
                </span>
               62/A, Siddeswari Road, 1st Floor - Right Side (Opposite Monowara Hospital & VQN School,Near Baily Road) Channel i & Gateway School Building, Ramna, Dhaka-1217
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="text-purple-400 mt-1 text-lg flex-shrink-0" />
              <div>
                <span className="text-white font-semibold block mb-1">Call Us</span>
                +8801717-086313,
               
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-purple-400 mt-1 text-lg flex-shrink-0" />
              <div>
                <span className="text-white font-semibold block mb-1">Email</span>
                dr.rasheduzzaman@gmail.com
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 text-center text-sm text-white/60 border-t border-white/10 pt-8 relative z-10 font-sans select-text">
        © {new Date().getFullYear()} Dentia Care — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
