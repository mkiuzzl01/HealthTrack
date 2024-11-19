"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper/modules";
import { SiComma } from "react-icons/si";

const data = [
  {
    name: "Robert",
    role: "CTO, Robert Consultancy",
    imageUrl: "/assets/Client.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
  },
  {
    name: "Jeny Doe",
    role: "CEO, Jeny Consultancy",
    imageUrl: "/assets/Client.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
  },
  {
    name: "Smith",
    role: "Marketing Manager at Stech",
    imageUrl: "/assets/Client.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
  },
  {
    name: "Ema Watson",
    role: "Marketing Manager at Stech",
    imageUrl: "/assets/Client.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
  },
  {
    name: "Watson",
    role: "Marketing Manager at Stech",
    imageUrl: "/assets/Client.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null); 
  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 8,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 swiper-slide-content">
              <div className="flex flex-row text-gray-500">
              <SiComma></SiComma>
              <SiComma></SiComma>
              </div>
              <p className="mb-4 text-gray-600 italic">{item?.testimonial}</p>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={item?.imageUrl}
                  alt={item?.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {item?.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item?.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 p-4">
        <button
          className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-400"
          onClick={() => swiperRef.current?.slidePrev()} 
        >
          &#8592;
        </button>
        <button
          className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-400"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
