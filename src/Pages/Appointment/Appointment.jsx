import React from 'react';

const Appointment = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[500px] object-cover bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624969862293-b749659ccc4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-extrabold tracking-wide drop-shadow-xl animate-fade-in">
            Book Appointment
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        Home &gt; <span className="font-semibold text-blue-800">Book Appointment</span>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Form Side */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">📅 Book Your Appointment</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Schedule expert dental care tailored just for you. A healthy smile starts here. Quick and easy!
          </p>

          <form className="space-y-5">
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400">
              <option>Select Service</option>
              <option>Teeth Cleaning</option>
              <option>Root Canal</option>
            </select>

            <div className="flex gap-4">
              <input
                type="date"
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
              />
              <select className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400">
                <option>Select Time</option>
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>02:00 PM</option>
              </select>
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/3 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/3 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-1/3 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 text-gray-700 focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:from-blue-600 hover:to-indigo-700 transition duration-300"
            >
              Send Appointment
            </button>
          </form>
        </div>

        {/* Right Image Side */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://www.shutterstock.com/image-photo/businessman-pointing-pen-virtual-screen-600nw-2514426419.jpg"
            alt="Dental Appointment"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
            <div className="flex items-center text-sm text-gray-800">
              <svg
                className="w-6 h-6 mr-3 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
                />
              </svg>
              <div>
                <p className="font-bold">Opening Hours</p>
                <p>Everyday at 4:00 PM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10"></div>
    </div>
  );
};

export default Appointment;
