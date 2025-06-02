import React from 'react';
import {
  FaChild, FaTooth, FaSmile, FaTeeth, FaHeartbeat, FaLaughBeam,
  FaStethoscope, FaBaby, FaCheck, FaStar
} from 'react-icons/fa';

const PediatricDentist = () => {
  const services = [
    {
      icon: <FaTooth className="text-pink-500 text-4xl" />,
      title: "First Dental Visits",
      description: "Gentle checkups for infants and toddlers to ensure healthy development.",
      benefits: ["Early cavity prevention", "Parent education", "Comfort-building for future visits"]
    },
    {
      icon: <FaSmile className="text-pink-500 text-4xl" />,
      title: "Fluoride & Sealants",
      description: "Protective treatments to shield young teeth from decay.",
      benefits: ["Long-term protection", "Quick & painless", "Kid-approved"]
    },
    {
      icon: <FaTeeth className="text-pink-500 text-4xl" />,
      title: "Pediatric Cleanings",
      description: "Fun, friendly, and thorough cleanings tailored to kids.",
      benefits: ["Bright, healthy smiles", "Positive dental habits", "Age-appropriate care"]
    },
    {
      icon: <FaChild className="text-pink-500 text-4xl" />,
      title: "Growth Monitoring",
      description: "We track your child’s oral development and intervene early if needed.",
      benefits: ["Preventive orthodontic guidance", "Peace of mind", "Timely action"]
    },
    {
      icon: <FaHeartbeat className="text-pink-500 text-4xl" />,
      title: "Emergency Kids' Care",
      description: "Fast, calming treatment for unexpected accidents or pain.",
      benefits: ["Same-day care", "Pain relief", "Minimize trauma"]
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-pink-50 py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-4 leading-tight animate-fade-in-down">Gentle Pediatric Dentistry</h1>
          <div className="w-20 h-1 bg-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            At <strong>Ayber Dental</strong>, we turn dental visits into joyful adventures. Dr. Rasheduzzaman brings expert care with warmth, fun, and gentle precision — making every child feel at home.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Kid-Friendly <span className="text-pink-600">Dental Services</span></h2>
            <div className="w-16 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-pink-100 transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-3 text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaCheck className="text-green-500 mr-2" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort & Fun Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We Make Dentistry <span className="text-pink-500">Fun!</span></h2>
            <p className="text-gray-600 mb-6">
              From ceiling TVs to treasure box prizes, we design a happy, secure environment where kids thrive. Each visit helps build habits for lifelong dental health.
            </p>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-center"><FaLaughBeam className="text-pink-500 mr-3" /> Friendly, calming staff</li>
              <li className="flex items-center"><FaStar className="text-yellow-400 mr-3" /> Rewards for brave patients</li>
              <li className="flex items-center"><FaBaby className="text-purple-500 mr-3" /> Tools made for tiny mouths</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://www.canyonridgepediatricdentistry.com/wp-content/uploads/pediatric-dentist-2202.jpg"
              alt="Pediatric Dentistry"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PediatricDentist;
