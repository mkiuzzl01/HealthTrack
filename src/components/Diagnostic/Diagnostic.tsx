"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const testName = [
  {
    testName: "MRI Scan",
    image: "/assets/laboratory/Genetic Testing.jpg",
    description:
      "Magnetic Resonance Imaging (MRI) provides detailed images of organs and tissues. It is widely used for diagnosing brain, spinal cord, and joint conditions.",
    cost: "$1000",
  },
  {
    testName: "PET Scan",
    image: "/assets/laboratory/Cardiac Stress Test.jpg",
    description:
      "Positron Emission Tomography (PET) helps in detecting cancer, brain disorders, and heart conditions by evaluating cellular activity in tissues.",
    cost: "$1200",
  },
  {
    testName: "Bone Density Test",
    image: "/assets/laboratory/MRI Scan.jpg",
    description:
      "Bone density testing, also called DXA or DEXA, is used to diagnose osteoporosis and assess bone health, particularly in older adults.",
    cost: "$400",
  },
  {
    testName: "Cardiac Stress Test",
    image: "/assets/laboratory/CT Scan.jpg",
    description:
      "A cardiac stress test evaluates heart function during physical exertion and is essential for diagnosing heart diseases.",
    cost: "$500",
  },
  {
    testName: "CT Scan",
    image: "/assets/laboratory/PET Scan.jpg",
    description:
      "A Computed Tomography (CT) scan combines X-ray images to create cross-sectional views of the body, often used for detecting tumors, fractures, and infections.",
    cost: "$700",
  },
];

const Laboratory = () => {
  const swiperRef = useRef(null);
  return (
    <div className="lg:w-3/4 mx-auto px-4">
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Precision Diagnostic Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of advanced diagnostic tests
            designed to provide accurate and detailed health insights.
          </p>
        </div>
        <div className="flex justify-end">
          <Link href="/laboratory">
            <button className="flex items-center py-2 px-4 gap-2 text-blue-500 hover:text-blue-700 duration-300">
              See more{" "}
              <span>
                <FaLongArrowAltRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, FreeMode]}
        loop={true}
        freeMode={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {testName.map((test, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg hover:shadow-lg transition-all duration-300">
              <Image
                placeholder="blur"
                blurDataURL={test?.image}
                src={test?.image}
                alt={test.testName}
                width={300}
                height={200}
                className="w-full object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mb-2">{test.testName}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {test.description}
              </p>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Take Test
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end gap-4 p-4">
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

export default Laboratory;
