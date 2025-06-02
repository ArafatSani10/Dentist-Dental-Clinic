import React, { useState } from 'react';
import { FaTooth, FaTeeth, FaTeethOpen, FaXRay, FaSmile, FaUserMd, FaClock, FaCalendarCheck, FaPhone, FaStar, FaQuoteLeft, FaCheck, FaUserInjured } from 'react-icons/fa';

const GeneralDentist = () => {

  
  // Services data
  const services = [
    { 
      icon: <FaTooth className="text-blue-500 text-3xl" />,
      title: "Comprehensive Dental Examinations",
      description: "Thorough oral assessments including cancer screening, gum health evaluation, and digital diagnostics.",
      benefits: ["Early problem detection", "Personalized treatment planning", "Baseline oral health records"]
    },
    { 
      icon: <FaTeeth className="text-blue-500 text-3xl" />,
      title: "Professional Teeth Cleanings",
      description: "Expert plaque and tartar removal to prevent cavities and gum disease using advanced techniques.",
      benefits: ["Gingivitis prevention", "Stain removal", "Oral hygiene optimization"]
    },
    { 
      icon: <FaTeethOpen className="text-blue-500 text-3xl" />,
      title: "Tooth-Colored Fillings",
      description: "Aesthetic composite restorations that blend seamlessly with your natural teeth.",
      benefits: ["Conservative approach", "Natural appearance", "Durable results"]
    },
    { 
      icon: <FaXRay className="text-blue-500 text-3xl" />,
      title: "Digital Dental Imaging",
      description: "Low-radiation digital X-rays for precise diagnosis of hidden dental issues.",
      benefits: ["90% less radiation", "Immediate results", "Enhanced diagnostic capability"]
    },
    { 
      icon: <FaSmile className="text-blue-500 text-3xl" />,
      title: "Cosmetic Enhancements",
      description: "Smile improvements through professional whitening, bonding, and contouring.",
      benefits: ["Immediate results", "Customized treatment", "Confidence boost"]
    },
    { 
      icon: <FaUserInjured className="text-blue-500 text-3xl" />,
      title: "Emergency Dental Care",
      description: "Prompt treatment for dental emergencies including pain relief and trauma management.",
      benefits: ["Same-day appointments", "Pain management", "Complication prevention"]
    }
  ];

  // Technology features
  const technologies = [
    {
      title: "Digital Impressions",
      description: "No more uncomfortable trays - we use intraoral scanners for perfect digital models"
    },
    {
      title: "Laser Dentistry",
      description: "Minimally invasive treatments with faster healing and less discomfort"
    },
    {
      title: "CAD/CAM Technology",
      description: "Same-day crowns and restorations created in our office"
    },
    {
      title: "3D Imaging",
      description: "Advanced CBCT scans for precise implant planning and diagnosis"
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      

      {/* Philosophy Section */}
      <div className="py-28 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The <span className="text-blue-600">Ayber Approach</span> to Dental Care
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Dr. Rasheduzzaman practices dentistry with a unique philosophy centered on personalized care and lasting relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 transform transition duration-300 hover:-translate-y-2">
              <div className="text-blue-500 mb-4">
                <FaUserMd className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">One Patient at a Time</h3>
              <p className="text-gray-600">
                You'll never feel rushed. Each appointment is dedicated to a single patient, ensuring undivided attention.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-500 transform transition duration-300 hover:-translate-y-2">
              <div className="text-teal-500 mb-4">
                <FaTooth className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prevention-Focused</h3>
              <p className="text-gray-600">
                Proactive care designed to prevent problems before they start, saving you time and discomfort.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500 transform transition duration-300 hover:-translate-y-2">
              <div className="text-amber-500 mb-4">
                <FaTeethOpen className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technology-Enhanced</h3>
              <p className="text-gray-600">
                Advanced tools used not for show, but to enhance comfort and precision in every procedure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive <span className="text-blue-600">Dental Services</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              All services personally performed by Dr. Rasheduzzaman with meticulous attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-blue-600 mb-2">Key Benefits:</h4>
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
          
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Personalized Preventive Care Plans</h3>
                <p className="mb-6">
                  Dr. Rasheduzzaman creates customized dental wellness plans that include all your preventive needs at special pricing.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><FaCheck className="mr-2" /> Comprehensive exams and cleanings</li>
                  <li className="flex items-center"><FaCheck className="mr-2" /> Priority scheduling</li>
                  <li className="flex items-center"><FaCheck className="mr-2" /> 10% discount on additional treatments</li>
                  <li className="flex items-center"><FaCheck className="mr-2" /> Emergency contact access</li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg w-full max-w-xs">
                  Learn About Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl aspect-square flex items-center justify-center p-8 text-white">
                  <div className="text-center">
                    <FaXRay className="text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Digital Imaging</h3>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl aspect-square flex items-center justify-center p-8 text-white">
                  <div className="text-center">
                    <FaTeethOpen className="text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Laser Dentistry</h3>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl aspect-square flex items-center justify-center p-8 text-white">
                  <div className="text-center">
                    <FaTooth className="text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">CAD/CAM</h3>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl aspect-square flex items-center justify-center p-8 text-white">
                  <div className="text-center">
                    <FaUserMd className="text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">3D Planning</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Precision <span className="text-blue-600">Technology</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Dr. Rasheduzzaman invests in advanced technology not for show, but to enhance your comfort and treatment outcomes.
              </p>
              
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                      <FaCheck className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{tech.title}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

 

    </div>
  );
};

export default GeneralDentist;