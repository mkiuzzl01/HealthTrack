"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import banner1 from "../../../public/assets/bg-1.jpg";
import banner2 from "../../../public/assets/bg-2.jpg";
import banner3 from "../../../public/assets/bg-3.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
      className="mySwiper"
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className="relative w-full lg:h-[600px] md:h-[400px] h-[350px]">
          <Image src={banner1} alt="Banner 1" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-75"></div>
          <div className="absolute lg:w-[600px] lg:top-1/3 lg:left-[100px] lg:p-0 md:p-20 p-5 md:top-[20px] w-full mx-auto top-[50px] left-0 text-white mt-10">
            <h1 className="lg:text-5xl lg:text-left md:text-4xl text-xl text-center font-bold uppercase">
              Our strength is your well-being
            </h1>
            <p className="mt-3 lg:text-left text-center">
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
            <div className="flex lg:justify-start justify-center gap-5">
              <button className="bg-[#0057B8] px-5 py-3 rounded text-white mt-5">
                Appointment
              </button>
              <button className="bg-[#091C47] px-5 py-3 rounded text-white mt-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full lg:h-[600px] md:h-[400px] h-[350px]">
          <Image src={banner2} alt="Banner 1" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-75"></div>
          <div className="absolute lg:w-[600px] lg:top-1/3 lg:left-[100px] lg:p-0 md:p-20 p-5 md:top-[20px] w-full mx-auto top-[50px] left-0 text-white mt-10">
            <h1 className="lg:text-5xl lg:text-left md:text-4xl text-xl text-center font-bold uppercase">
              We want to heal the patient with services
            </h1>
            <p className="mt-3 lg:text-left text-center">
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
            <div className="flex lg:justify-start justify-center gap-5">
              <button className="bg-[#0057B8] px-5 py-3 rounded text-white mt-5">
                Appointment
              </button>
              <button className="bg-[#091C47] px-5 py-3 rounded text-white mt-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full lg:h-[600px] md:h-[400px] h-[350px]">
          <Image src={banner3} alt="Banner 1" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-75"></div>
          <div className="absolute lg:w-[600px] lg:top-1/3 lg:left-[100px] lg:p-0 md:p-20 p-5 md:top-[20px] w-full mx-auto top-[50px] left-0 text-white mt-10">
            <h1 className="lg:text-5xl lg:text-left md:text-4xl text-xl text-center font-bold uppercase">
              Need your expertise we are ready
            </h1>
            <p className="mt-3 lg:text-left text-center ">
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
            <div className="flex lg:justify-start justify-center gap-5">
              <button className="bg-[#0057B8] px-5 py-3 rounded text-white mt-5">
                Appointment
              </button>
              <button className="bg-[#091C47] px-5 py-3 rounded text-white mt-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;
