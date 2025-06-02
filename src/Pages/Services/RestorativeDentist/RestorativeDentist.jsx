import React from 'react';
import {
  FaTooth, FaRegSmileBeam, FaTools, FaTeethOpen, FaHandHoldingHeart,
  FaCheckCircle, FaStar, FaRegGrinStars
} from 'react-icons/fa';

const RestorativeDentist = () => {
  const treatments = [
    {
      icon: <FaTooth className="text-indigo-500 text-3xl" />,
      title: "Tooth-Colored Fillings",
      description: "Seamless fillings that restore damaged teeth while blending in beautifully.",
      benefits: ["Natural appearance", "Durable material", "Quick procedure"]
    },
    {
      icon: <FaRegSmileBeam className="text-indigo-500 text-3xl" />,
      title: "Dental Crowns",
      description: "Custom-made crowns that protect and restore function to damaged teeth.",
      benefits: ["Long-lasting protection", "Improved strength", "Restored aesthetics"]
    },
    {
      icon: <FaTeethOpen className="text-indigo-500 text-3xl" />,
      title: "Bridges",
      description: "Fixed replacements that bridge the gap caused by missing teeth.",
      benefits: ["Natural smile", "Better bite", "No surgery required"]
    },
    {
      icon: <FaTools className="text-indigo-500 text-3xl" />,
      title: "Full Mouth Restoration",
      description: "Comprehensive care for multiple dental issues in one holistic plan.",
      benefits: ["Functional smile", "Customized approach", "Renewed confidence"]
    },
    {
      icon: <FaHandHoldingHeart className="text-indigo-500 text-3xl" />,
      title: "Gentle Tooth Extractions",
      description: "Pain-free extractions done only when necessary, with full aftercare support.",
      benefits: ["Comfort-first technique", "Fast healing guidance", "Minimized discomfort"]
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* Hero / Intro Section */}
      <section className="bg-gradient-to-br from-white to-indigo-50 py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-indigo-600">Restore Strength & Confidence</h2>
          <div className="w-24 h-1 bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            At Ayber Dental, our restorative treatments bring function and beauty back to your smile. Dr. Rasheduzzaman uses advanced techniques with a gentle touch to repair, rebuild, and rejuvenate.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Expert <span className="text-indigo-600">Restorative Services</span></h2>
            <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-indigo-100 transition duration-300">
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-3 text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <ul className="space-y-2 text-sm">
                  {item.benefits.map((b, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort & Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Compassionate, Personalized Care</h2>
            <p className="text-gray-600 mb-4">
              Every smile tells a story. We listen, we care, and we work with you to restore not just teeth—but confidence. Our restorative philosophy blends clinical skill with empathy.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaStar className="text-yellow-400 mr-2" /> Modern technology & tools</li>
              <li className="flex items-center"><FaRegGrinStars className="text-indigo-500 mr-2" /> Comfortable, stress-free visits</li>
              <li className="flex items-center"><FaHandHoldingHeart className="text-red-400 mr-2" /> Always patient-first approach</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9oMuZOPF1yAWqbKAQMQuGLdAPOGG9uESiA&s"
              alt="Restorative Dentistry"
              className="rounded-3xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default RestorativeDentist;
