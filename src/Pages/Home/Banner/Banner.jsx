import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Banner() {
  return (
    <div className="relative -mt-32 w-full h-[600px] md:h-screen overflow-hidden">

    

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000f3d] via-[#001a5a80] to-transparent z-10" />

      {/* Background Image Swiper */}
      <Swiper
        className="w-full h-full"
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Q37J4pSR/beautiful-girl-sitting-dentist-s-office.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Y7Bfyhw7/dentist-doing-check-up-patient.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/ZR7GMd5Q/dentists-treat-patients-teeth-3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/mCDb4NF3/professional-specialist-visit-patient-healthy.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
