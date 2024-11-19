import React from "react";
import Specialists from "./__components/Specialists";
import Form from "./__components/Form";
import banner from "@public/assets/about/timeline-6.jpg";

const page = () => {
  return (
    <div className="lg:w-3/4 m-auto pb-5">
      <div
        className="relative py-16 mb-10"
        style={{
          backgroundImage: `url(${banner?.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 px-4">
          <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-white uppercase">
            Our Specialists
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl">
            We have all the professional specialists in our hospital
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-2/5">
          <Form />
        </div>
        <div className="lg:w-3/5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
          <Specialists />
        </div>
      </div>
    </div>
  );
};

export default page;
