"use client";
import blood from "@public/assets/event/blood.jpg";
import camp from "@public/assets/event/Camp.jpg";
import childcare from "@public/assets/event/childcare.jpg";
import equipment from "@public/assets/event/Equipment.jpg";
import newSpecialist from "@public/assets/event/New Specialist.jpg";
import awareness from "@public/assets/event/Awareness.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const activities = [
  {
    id: "01",
    title: "Free Health Camp Organized",
    description:
      "A successful free health camp was conducted, providing medical check-ups and consultations to over 500 patients.",
    image: camp,
  },
  {
    id: "02",
    title: "Blood Donation Drive",
    description:
      "Our recent blood donation event saw an overwhelming response, collecting 200+ units of blood for those in need.",
    image: blood,
  },
  {
    id: "03",
    title: "New Specialist Joined",
    description:
      "Welcoming Dr. [Name], a renowned [Specialty] specialist, to our hospital team.",
    image: newSpecialist,
  },
  {
    id: "04",
    title: "Advanced Equipment Installed",
    description:
      "The hospital has upgraded its facilities with the latest [Equipment Name], enhancing diagnostic and treatment capabilities.",
    image: equipment,
  },
  {
    id: "05",
    title: "Health Awareness Seminar",
    description:
      "Conducted an informative session on [Topic], raising awareness among attendees.",
    image: awareness,
  },
  {
    id: "06",
    title: "Child Care Workshop",
    description:
      "Successfully hosted a workshop on child health and nutrition for parents and caregivers.",
    image: childcare,
  },
  {
    id: "07",
    title: "Community Outreach Program",
    description:
      "Our medical team visited rural areas to provide free consultations and distribute medicines.",
    image: equipment,
  },
  {
    id: "08",
    title: "Patient Support Hotline Launched",
    description:
      "Introduced a dedicated support hotline for quick assistance and health-related inquiries.",
    image: childcare,
  },
  {
    id: "09",
    title: "Online Appointment System Enhanced",
    description:
      "Improved our online appointment booking system for faster and smoother user experiences.",
    image: equipment,
  },
  {
    id: "10",
    title: "Celebration of Health Awareness Day",
    description:
      "Organized activities and programs to mark [Day/Topic], promoting health and well-being.",
    image: newSpecialist,
  },
];

const RecentActivities = () => {
  const swiperRef = useRef(null);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
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
        {activities.map((activity, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-row justify-between p-2">
              <div className="lg:w-1/2 w-full h-72  relative group">
                <Image
                  src={activity?.image}
                  alt={activity.title}
                  className="w-full h-72 object-cover rounded-s-lg"
                />
                <div
                  className="absolute inset-0 bg-blue-500 bg-opacity-50 
              flex flex-col justify-center items-center text-center 
              p-4 opacity-0 group-hover:opacity-100 
              -translate-x-full group-hover:translate-x-0 
              transition-all duration-1000 rounded-s-lg"
                >
                  <Link href={`view-details/${activity.id}`}>
                    <button className="outline outline-offset-2 outline-1  text-white py-2 px-4 rounded-md  transition-colors hover:bg-blue-500">
                      View
                    </button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-gray-200 rounded-r-full border-r-4 border-blue-400 p-4">
                  <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {activity.description}
                  </p>
                </div>
              </div>
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

export default RecentActivities;
