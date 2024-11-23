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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Department = () => {
  const departments = [
    {
      id: "1",
      name: "Dental",
      image: img1,
      description:
        "Offers comprehensive dental care including check-ups, cleanings, fillings, and advanced treatments such as root canals and implants.",
    },
    {
      id: "2",
      name: "Orthopedics",
      image: img2,
      description:
        "Specializes in treating musculoskeletal issues such as fractures, joint problems, arthritis, and spinal disorders.",
    },
    {
      id: "3",
      name: "Neurosciences",
      image: img3,
      description:
        "Focuses on the diagnosis and treatment of neurological conditions including strokes, epilepsy, and neurodegenerative diseases.",
    },
    {
      id: "4",
      name: "Cancer Care",
      image: img4,
      description:
        "Provides comprehensive oncology services including chemotherapy, radiation therapy, and surgical interventions.",
    },
    {
      id: "5",
      name: "Gastroenterology",
      image: img5,
      description:
        "Dedicated to the treatment of digestive system disorders such as ulcers, liver diseases, and irritable bowel syndrome.",
    },
    {
      id: "6",
      name: "Medicine",
      image: img6,
      description:
        "Covers general medical care, including diagnosis and treatment of common illnesses and chronic diseases.",
    },
    {
      id: "7",
      name: "Cardiology",
      image: img7,
      description:
        "Specializes in heart-related conditions such as coronary artery disease, arrhythmias, and heart failure.",
    },
    {
      id: "8",
      name: "Surgery",
      image: img8,
      description:
        "Offers a wide range of surgical services, including general, laparoscopic, and specialized procedures.",
    },
  ];

  return (
    <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-32">
      {/* Section title */}
      <section>
        <div className="text-center p-10">
          <h1 className="lg:text-3xl text-2xl uppercase">
            Explore Our Specialized Departments
          </h1>
          <p>
            Our hospital is home to a wide range of specialized departments
            dedicated to providing exceptional healthcare services.
          </p>
        </div>
      </section>
      {/* Department cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((department) => (
            <div
              key={department.id}
              className="relative group rounded overflow-hidden"
            >
              <Image
                src={department.image}
                alt={department.name}
                className="w-full h-48 object-cover"
                layout="responsive"
                width={150}
                height={150}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 w-full px-4 py-2 bg-gradient-to-t from-gray-700  to-transparent">
                <h2 className="text-white text-lg font-semibold">
                  {department.name}
                </h2>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm mb-4">
                  {department.description}
                </p>
                <button className="border-2 text-white px-4 py-2 rounded hover:bg-indigo-600">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <section>
          <div className="flex justify-center items-center gap-2 my-3">
            <button className="p-2 bg-gray-300 flex items-center hover:bg-gray-400">
              <span className="p-1">
                <FaArrowLeft />
              </span>
              Prev
            </button>
            {departments.map((item, index) => (
              <div key={index}>
                <button className="bg-gray-300 p-2 rounded-full m-1">
                  {index + 1}
                </button>
              </div>
            ))}
            <button className="p-2 bg-gray-300 flex items-center hover:bg-gray-400">
              Next
              <span className="p-1">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Department;
