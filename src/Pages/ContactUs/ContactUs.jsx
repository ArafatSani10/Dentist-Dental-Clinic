import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const content = {
  en: {
    heroTitle: "Contact Dr. Rasheduzzaman",
    heroSubtitle: "Feel free to reach out for any dental care or consultation.",
    contactInfoTitle: "Doctor’s Information",
    email: "Email",
    emailValue: "dr.rasheduzzaman@gmail.com",
    phone: "Phone",
    phoneValue: "01717-08 63 13\n01711-01 77 30",
    address: "Address",
    addressValue: "62/A Siddeswari Road, Ramna, Dhaka-1217",
    hours: "Consultation Hours",
    hoursValue: "10:00 AM – 1:00 PM, 4:00 PM – 10:00 PM",
    openDaily: "Open daily",
    formTitle: "Send a Message",
    formName: "Name",
    formNamePlaceholder: "Enter your name",
    formEmail: "Email",
    formEmailPlaceholder: "Enter your email",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message",
    formSubmit: "Send",
  },
  bn: {
    heroTitle: "ডাঃ রাশেদুজ্জামানের সাথে যোগাযোগ করুন",
    heroSubtitle: "যেকোনো দন্ত চিকিৎসা বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।",
    contactInfoTitle: "ডাক্তারের তথ্য",
    email: "ইমেইল",
    emailValue: "dr.rasheduzzaman@gmail.com",
    phone: "ফোন",
    phoneValue: "০১৭১৭-০৮ ৬৩ ১৩\n০১৭১১-০১ ৭৭ ৩০",
    address: "ঠিকানা",
    addressValue: "৬২/এ সিদ্ধেশ্বরী রোড, রমনা, ঢাকা-১২১৭",
    hours: "পরামর্শের সময়",
    hoursValue: "১০:০০ AM – ১:০০ PM, ৪:০০ PM – ১০:০০ PM",
    openDaily: "প্রতিদিন খোলা",
    formTitle: "একটি বার্তা পাঠান",
    formName: "নাম",
    formNamePlaceholder: "আপনার নাম লিখুন",
    formEmail: "ইমেইল",
    formEmailPlaceholder: "আপনার ইমেইল লিখুন",
    formMessage: "বার্তা",
    formMessagePlaceholder: "আপনার বার্তা লিখুন",
    formSubmit: "পাঠান",
  },
};

const ContactUs = () => {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <section className="mt-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 overflow-hidden">

      {/* Language Toggle Buttons */}
      <div className="flex justify-end px-4 pt-6 sm:px-10 max-w-6xl mx-auto gap-3">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full font-semibold ${
            lang === "en"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-blue-600 border border-blue-600"
          } transition`}
          aria-pressed={lang === "en"}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLang("bn")}
          className={`px-3 py-1 rounded-full font-semibold ${
            lang === "bn"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-blue-600 border border-blue-600"
          } transition`}
          aria-pressed={lang === "bn"}
          aria-label="Switch to Bangla"
        >
          BN
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16 px-4 sm:px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-sm">
          {t.heroTitle}
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t.heroSubtitle}</p>
      </div>

      {/* Google Map Full Width */}
      <div className="w-full h-[350px] md:h-[450px]">
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8742785944715!2d90.40875527597577!3d23.788929387071446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7af7b01de3f%3A0x839cfae2b5ec3992!2s62%20Siddeswari%20Rd%2C%20Dhaka%201210!5e0!3m2!1sen!2sbd!4v1717258926169!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Contact Info + Form Grid */}
      <div className="py-20 px-4 sm:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">{t.contactInfoTitle}</h3>

          <div className="flex items-start gap-4 bg-white/60 backdrop-blur-lg border border-blue-100 rounded-xl p-6 shadow-md">
            <FaEnvelope className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 text-sm">{t.email}</h4>
              <a href={`mailto:${t.emailValue}`} className="text-blue-700 hover:underline text-sm">
                {t.emailValue}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 backdrop-blur-lg border border-blue-100 rounded-xl p-6 shadow-md">
            <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 text-sm">{t.phone}</h4>
              <p className="whitespace-pre-line text-sm">{t.phoneValue}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 backdrop-blur-lg border border-blue-100 rounded-xl p-6 shadow-md">
            <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 text-sm">{t.address}</h4>
              <p className="text-sm">{t.addressValue}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 backdrop-blur-lg border border-blue-100 rounded-xl p-6 shadow-md">
            <FaClock className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700 text-sm">{t.hours}</h4>
              <p className="text-sm">{t.hoursValue}</p>
              <span className="text-green-600 font-semibold text-sm">{t.openDaily}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/60 backdrop-blur-lg border border-blue-100 p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-blue-700">{t.formTitle}</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.formName}</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder={t.formNamePlaceholder}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.formEmail}</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder={t.formEmailPlaceholder}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">{t.formMessage}</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder={t.formMessagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              {t.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
