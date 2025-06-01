import React from 'react';
import {
    FaUserGraduate,
    FaTooth,
    FaUniversity,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock,
    FaTrophy,
} from 'react-icons/fa';

const Dentist = () => {
    const profileInfo = [
        {
            icon: <FaUserGraduate className="text-blue-500 text-xl" />,
            label: "Qualifications",
            value: "BDS (Dhaka), FICD (USA), M.Phil (Researcher)",
        },
        {
            icon: <FaTooth className="text-blue-500 text-xl" />,
            label: "Specializations",
            value: "Oral & Dental Surgeon, Endodontist, Cosmetic Dentistry",
        },
        {
            icon: <FaUniversity className="text-blue-500 text-xl" />,
            label: "Experience",
            value: "BSMMU, PG Hospital, Mahidol University (Thailand), DMC, Malaysia, MICD (India)",
        },
        {
            icon: <FaUniversity className="text-blue-500 text-xl" />,
            label: "Lecturer",
            value: "Saphena Dental College & Hospital",
        },
        {
            icon: <FaEnvelope className="text-blue-500 text-xl" />,
            label: "Email",
            value: (
                <a
                    href="mailto:dr.rasheduzzaman@gmail.com"
                    className="text-blue-600 hover:underline"
                >
                    dr.rasheduzzaman@gmail.com
                </a>
            ),
        },
        {
            icon: <FaPhoneAlt className="text-blue-500 text-xl" />,
            label: "Mobile",
            value: "01717-08 63 13, 01711-01 77 30",
        },
        {
            icon: <FaMapMarkerAlt className="text-blue-500 text-xl" />,
            label: "Address",
            value: "62/A Siddeswari Rd, Ramna, Dhaka-1217",
        },
        {
            icon: <FaClock className="text-blue-500 text-xl" />,
            label: "Consulting Hours",
            value: "10:00 AM – 1:00 PM, 4:00 PM – 10:00 PM",
        },
        {
            icon: <FaClock className="text-green-600 text-xl" />,
            label: "Availability",
            value: <span className="text-green-600 font-semibold">Open Everyday</span>,
        },
    ];

    return (
        <div className=" bg-gradient-to-b from-white via-blue-50 to-white text-gray-800 font-sans">

            {/* Header */}
            <div className="text-center py-16 mt-28 px-6 sm:px-10 md:px-20 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-b-3xl shadow-md">
                <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-md">
                    Dr. Rasheduzzaman
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-3">
                    Chief Consultant – Dental Surgery & Endodontics
                </p>
                <div className="flex justify-center text-sm text-gray-400 mt-2 space-x-2">
                    <p>Home</p>
                    <span>&gt;</span>
                    <p className="text-blue-500 font-medium">Dentist</p>
                </div>
            </div>

            {/* Image Gallery */}
            {/* Image Gallery */}
            <div className="max-w-7xl mx-auto mt-16 px-4 flex flex-col md:flex-row gap-6">
                {/* Image 1 */}
                <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border-4 border-blue-200 hover:scale-[1.02] transition duration-300">
                    <img
                        src="https://i.ibb.co/BHF9cq3d/Picsart-25-05-28-00-31-47-015-1.jpg"
                        alt="Dr. Rasheduzzaman 1"
                        className="w-full h-[600px] object-cover object-top"
                    />
                </div>

                {/* Image 2 */}
                <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border-4 border-blue-200 hover:scale-[1.02] transition duration-300">
                    <img
                        src="https://i.ibb.co/Mx01wVxj/1748370612945-1.jpg"
                        alt="Dr. Rasheduzzaman 2"
                        className="w-full h-[600px] object-cover object-top"
                    />
                </div>
            </div>


            {/* Profile Info Cards */}
            <div className="max-w-7xl mx-auto mt-16 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {profileInfo.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow hover:shadow-md transition-all"
                    >
                        <div>{item.icon}</div>
                        <div>
                            <p className="font-semibold text-sm text-gray-700">{item.label}</p>
                            <p className="text-[16px]">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Awards */}
            <div className="max-w-7xl mx-auto mt-20 mb-10 px-4">
                <div className="bg-white/90 rounded-3xl p-8 shadow-lg hover:shadow-blue-100 transition">
                    <div className="flex items-center justify-center mb-4 text-blue-600">
                        <FaTrophy className="text-3xl" />
                    </div>
                    <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                        Achievements & Awards
                    </h3>
                    <p className="text-gray-600 text-lg text-center leading-relaxed">
                        Dr. Rasheduzzaman has been internationally recognized for his contributions to
                        cosmetic dentistry and advanced endodontic techniques. He actively participates
                        in global dental conferences and has completed specialized training in multiple
                        countries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dentist;
