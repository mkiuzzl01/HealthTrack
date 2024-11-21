"use client";

import Image from "next/image";
import img1 from "@public/assets/department-1.jpg";
import img2 from "@public/assets/department-2.jpg";
import img3 from "@public/assets/department-3.jpg";
import img4 from "@public/assets/department-4.jpg";
import img5 from "@public/assets/department-5.jpg";
import img6 from "@public/assets/department-6.jpg";
import img7 from "@public/assets/department-7.jpg";
import img8 from "@public/assets/department-8.jpg";

const Department = () => {
  const departments = [
    {
      id: "1",
      name: "Dental",
      image: img1,
    },
    {
      id: "2",
      name: "Orthopedics",
      image: img2,
    },
    {
      id: "3",
      name: "Neurosciences",
      image: img3,
    },
    {
      id: "4",
      name: "Cancer care",
      image: img4,
    },
    {
      id: "5",
      name: "Gastroenterology",
      image: img5,
    },
    {
      id: "6",
      name: "Medicine",
      image: img6,
    },
    {
      id: "7",
      name: "Cardiology",
      image: img7,
    },
    {
      id: "8",
      name: "Surgery",
      image: img8,
    },
  ];

  return (
    <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-32">
      <div className="border-l-4 border-[#0057B8] pl-2">
        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-gray-800 uppercase">
          Our Department
        </h1>
        <h1 className="mt-2">
          Our hospital has all kinds of departments, <br /> So you can get all
          kinds of treatment
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map((department) => (
          <div
            key={department.name}
            className="relative overflow-hidden bg-white rounded hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={department.image}
              alt={department.name}
              className="w-full h-48 object-cover"
              layout="responsive"
              width={150}
              height={150}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 hover:bg-[#0057B8] cursor-pointer transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex justify-center">
                  <button className="w-full mt-5 bg-[#0057B8] text-white py-2 px-5 rounded-full hover:bg-opacity-80 transition-opacity duration-300">
                    {department.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
