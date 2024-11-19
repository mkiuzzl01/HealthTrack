"use client";

import Image from "next/image";
import doctorTeamImg from "../../../public/assets/choose-us-img.jpg";

const WhyChooseUs = () => {
  return (
    <div className="lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-0 px-5 my-32">
      <div>
        <div className="text-left">
          <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-gray-800 uppercase border-l-4 border-[#0057B8] pl-2">
            Why Choose Us
          </h2>
        </div>
        <div className="mt-8">
          <div className="flex items-start">
            <div className="w-12 h-12 p-7 bg-[#0057B8] text-white rounded-full flex items-center justify-center font-bold mr-4">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Modern Technology
              </h3>
              <p className="mt-2 text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at
                qui libero nostrum illum repellat.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-6">
            <div className="w-12 h-12 p-7 bg-[#001942] text-white rounded-full flex items-center justify-center font-bold mr-4">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Professional Doctors
              </h3>
              <p className="mt-2 text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at
                qui libero nostrum illum repellat.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-6">
            <div className="w-12 h-12 p-7 bg-[#0057B8] text-white rounded-full flex items-center justify-center font-bold mr-4">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Affordable Price
              </h3>
              <p className="mt-2 text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at
                qui libero nostrum illum repellat.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-6">
            <div className="w-12 h-12 p-7 bg-[#001942] text-white rounded-full flex items-center justify-center font-bold mr-4">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Friendly Environment
              </h3>
              <p className="mt-2 text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at
                qui libero nostrum illum repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <Image
            src={doctorTeamImg}
            alt="Doctor Team"
            className="rounded"
            layout="responsive"
            width={300}
            height={200}
          />
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded shadow-md text-center">
            <h4 className="text-lg font-bold text-gray-800">
              24/7 Hours Service
            </h4>
            <p className="mt-2 text-xl font-semibold text-[#0057B8]">
              1-885-665-2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
