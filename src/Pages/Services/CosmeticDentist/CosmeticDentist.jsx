import React from 'react';
import { FaSmile, FaTooth, FaCamera, FaStar, FaTeeth, FaMagic, FaCheck, FaUserMd } from 'react-icons/fa';

const CosmeticDentist = () => {
  const cosmeticServices = [
    {
      icon: <FaSmile className="text-pink-500 text-3xl" />,
      title: "Smile Makeovers",
      description: "Comprehensive smile transformations using a combination of veneers, whitening, and alignment.",
      benefits: ["Boosted confidence", "Customized aesthetics", "Balanced facial harmony"]
    },
    {
      icon: <FaTooth className="text-pink-500 text-3xl" />,
      title: "Porcelain Veneers",
      description: "Thin shells designed to cover imperfections and reshape your smile beautifully.",
      benefits: ["Natural look", "Durable porcelain", "Instant results"]
    },
    {
      icon: <FaTeeth className="text-pink-500 text-3xl" />,
      title: "Professional Whitening",
      description: "In-office and take-home whitening solutions for noticeably brighter teeth.",
      benefits: ["Safe and effective", "Quick enhancement", "Minimal sensitivity"]
    },
    {
      icon: <FaMagic className="text-pink-500 text-3xl" />,
      title: "Cosmetic Bonding",
      description: "Sculpting minor chips, gaps, and discoloration using tooth-colored resin.",
      benefits: ["Non-invasive", "Cost-effective", "Same-day improvement"]
    },
    {
      icon: <FaCamera className="text-pink-500 text-3xl" />,
      title: "Digital Smile Design",
      description: "Preview your future smile with high-tech simulations before treatment begins.",
      benefits: ["Personalized planning", "Visual confidence", "Informed decisions"]
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Philosophy */}
      <div className="py-28 bg-gradient-to-br from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Art & Precision in <span className="text-pink-600">Cosmetic Dentistry</span>
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Dr. Rasheduzzaman blends science and artistry to craft confident, natural-looking smiles tailored just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-pink-500 hover:-translate-y-2 transition duration-300">
              <div className="text-pink-500 mb-4"><FaUserMd className="text-4xl" /></div>
              <h3 className="text-xl font-bold mb-3">Artist’s Eye</h3>
              <p className="text-gray-600">
                Every case is treated like a work of art — symmetry, proportion, and natural aesthetics come first.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-rose-500 hover:-translate-y-2 transition duration-300">
              <div className="text-rose-500 mb-4"><FaSmile className="text-4xl" /></div>
              <h3 className="text-xl font-bold mb-3">Patient-Centered Design</h3>
              <p className="text-gray-600">
                We listen to your goals, understand your vision, and create smiles that reflect your personality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500 hover:-translate-y-2 transition duration-300">
              <div className="text-yellow-500 mb-4"><FaStar className="text-4xl" /></div>
              <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
              <p className="text-gray-600">
                Only the highest quality porcelains, resins, and whitening agents are used for long-lasting beauty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Specialized <span className="text-pink-600">Cosmetic Services</span>
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Enhance your natural beauty with our advanced cosmetic offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cosmeticServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-400"></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-pink-600 mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-pink-600 to-rose-500 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Your Dream Smile Starts Here</h3>
                <p className="mb-6">
                  Schedule a personalized consultation to preview your new smile and build a treatment plan that suits your timeline, lifestyle, and budget.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><FaCheck className="mr-2" /> Digital smile simulations</li>
                  <li className="flex items-center"><FaCheck className="mr-2" /> Step-by-step makeover process</li>
                  <li className="flex items-center"><FaCheck className="mr-2" /> Transparent pricing</li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <button className="bg-white text-pink-700 hover:bg-pink-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg w-full max-w-xs">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticDentist;
