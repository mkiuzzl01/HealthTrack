"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import image1 from "@public/assets/publication/image-1.jpg";
import image2 from "@public/assets/publication/image-2.jpg";
import image3 from "@public/assets/publication/image-3.jpg";
import image4 from "@public/assets/publication/image-4.jpg";
import image5 from "@public/assets/publication/image-5.jpg";
import image6 from "@public/assets/publication/image-6.jpg";
import { useRef } from "react"; 
import "./Publications.module.css"

const publications = [
  {
    id: "01",
    tropics: "Medicine",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus praesentium perferendis nostrum, nemo dolore? Ab veniam tempora deleniti adipisci. Assumenda modi consequuntur laborum, id totam nobis placeat aliquid maxime.",
    image: image1,
    date: "Feb 23",
  },
  {
    id: "02",
    tropics: "Pharmacy",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus praesentium perferendis nostrum, nemo dolore? Ab veniam tempora deleniti adipisci. Assumenda modi consequuntur laborum, id totam nobis placeat aliquid maxime.",
    image: image2,
    date: "Jun 25",
  },
  {
    id: "03",
    tropics: "Neurology",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus praesentium perferendis nostrum, nemo dolore? Ab veniam tempora deleniti adipisci. Assumenda modi consequuntur laborum, id totam nobis placeat aliquid maxime.",
    image: image3,
    date: "Aug 09",
  },
  {
    id: "04",
    topic: "General",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus praesentium perferendis nostrum, nemo dolore? Ab veniam tempora deleniti adipisci. Assumenda modi consequuntur laborum, id totam nobis placeat aliquid maxime.",
    image: image4,
    date: "Jun 12",
  },
  {
    id: "05",
    topic: "General",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus praesentium perferendis nostrum, nemo dolore? Ab veniam tempora deleniti adipisci. Assumenda modi consequuntur laborum, id totam nobis placeat aliquid maxime.",
    image: image5,
    date: "Nav 18",
  },
  {
    id: "06",
    topic: "General",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus praesentium perferendis nostrum, nemo dolore? Ab veniam tempora deleniti adipisci. Assumenda modi consequuntur laborum, id totam nobis placeat aliquid maxime.",
    image: image6,
    date: "22 Dec",
  },
];

const Publication = () => {
  const swiperRef = useRef(null);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
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
        {publications.map((publication, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col justify-between">
              <div className="w-full rounded-lg  relative group">
                <Image
                  src={publication?.image}
                  alt={publication.title}
                  className="w-full object-cover"
                />
                <div className="absolute right-3 -bottom-4  text-white py-2 px-4 rounded-md border-2 bg-blue-500">
                  {publication?.date}
                </div>
              </div>
              <div className="w-full border-r-4 border-b-4 card-content">
                <div className="bg-gray-200 p-4">
                  <h3 className="text-lg font-bold mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {publication.description}
                  </p>
                  <div className="card-content"></div>
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

export default Publication;
