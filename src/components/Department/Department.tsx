"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const departments = [
  {
    id: "01",
    name: "Hematology",
    description:
      "The Clinical Hematology Department offers expert care for people with problems in their blood.",
    icon: "/assets/blood-test.png",
  },
  {
    id: "02",
    name: "Cardiology",
    description:
      "Our expert team of cardiologists provide 24-hour dedicated service to patients with heart conditions.",
    icon: "/assets/cardiology.png",
  },
  {
    id: "03",
    name: "Neurology",
    description:
      "The Department of Neurology provides the best treatment of disorders affecting the nervous system.",
    icon: "/assets/neurology.png",
  },
  {
    id: "04",
    name: "Gastroenterology",
    description:
      "The Department of Gastroenterology provides the best care to patients with gastrointestinal disorders.",
    icon: "/assets/gastroenterology.png",
  },
  {
    id: "05",
    name: "Dentistry",
    description:
      "The Department of Dentistry is dedicated to providing the best dental healthcare to patients.",
    icon: "/assets/tooth.png",
  },
  {
    id: "06",
    name: "Internal Medicine",
    description:
      "The Internal Medicine Department focuses on the diagnosis and treatment of non-surgical illnesses.",
    icon: "/assets/medicine.png",
  },
  {
    id: "07",
    name: "Orthopedics",
    description:
      "The Orthopedics Department provides comprehensive care for bone and joint disorders, including fractures and arthritis.",
    icon: "/assets/blood-test.png",
  },
  {
    id: "08",
    name: "Dermatology",
    description:
      "The Dermatology Department offers expert care for skin, hair, and nail conditions.",
    icon: "/assets/cardiology.png",
  },
  {
    id: "09",
    name: "Pediatrics",
    description:
      "The Pediatrics Department specializes in the care and treatment of infants, children, and adolescents.",
    icon: "/assets/neurology.png",
  },
  {
    id: "10",
    name: "Oncology",
    description:
      "The Oncology Department provides advanced treatments for patients with cancer, focusing on personalized care.",
    icon: "/assets/neurology.png",
  },
  {
    id: "11",
    name: "Pulmonology",
    description:
      "The Pulmonology Department is dedicated to treating respiratory and lung-related conditions.",
    icon: "/assets/gastroenterology.png",
  },
  {
    id: "12",
    name: "Nephrology",
    description:
      "The Nephrology Department specializes in the diagnosis and management of kidney-related disorders.",
    icon: "/assets/tooth.png",
  },
  {
    id: "13",
    name: "Endocrinology",
    description:
      "The Endocrinology Department provides care for hormonal imbalances and endocrine system disorders.",
    icon: "/assets/medicine.png",
  },
  {
    id: "14",
    name: "Urology",
    description:
      "The Urology Department focuses on the diagnosis and treatment of urinary tract and male reproductive system issues.",
    icon: "/assets/blood-test.png",
  },
  {
    id: "15",
    name: "Radiology",
    description:
      "The Radiology Department offers imaging services including X-rays, MRIs, and CT scans for accurate diagnoses.",
    icon: "/assets/cardiology.png",
  },
  {
    id: "16",
    name: "Psychiatry",
    description:
      "The Psychiatry Department provides mental health care and treatment for psychological and behavioral disorders.",
    icon: "/assets/neurology.png",
  },
  {
    id: "17",
    name: "Ophthalmology",
    description:
      "The Ophthalmology Department specializes in eye care, including vision correction and surgical treatments.",
    icon: "/assets/gastroenterology.png",
  },
  {
    id: "18",
    name: "Obstetrics and Gynecology",
    description:
      "The Obstetrics and Gynecology Department provides comprehensive care for women, including prenatal and postnatal services.",
    icon: "/assets/tooth.png",
  },
];

const Service = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const departmentPerPage = 6;

  const indexOfLastDepartment = currentPage * departmentPerPage;
  const indexFirstDepartment = indexOfLastDepartment - departmentPerPage;

  const currentDepartment = departments.slice(
    indexFirstDepartment,
    indexOfLastDepartment
  );

  const totalPage = Math.ceil(departments.length / departmentPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPage ? prevPage + 1 : 1));
  };

  return (
    <div className="relative lg:w-3/4 mx-auto lg:px-0 px-5  overflow-hidden">
      <div className="py-10 my-5 text-center bg-gradient-to-r from-white via-gray-200 to-white">
        <h2 className="text-3xl text-blue-700 font-bold text-center mb-8">
          Explore Our Departments
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, soluta
          tempora facere nobis vel corporis similique dolore. Similique
          inventore autem eos quidem nisi esse ducimus debitis, modi deleniti
          delectus libero?
        </p>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentDepartment.map((dept, index) => (
            <Link key={index} href={`Department/${dept?.id}`}>
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: "linear" }}
                className={`w-full p-6 text-center border-b border-[#0057B8] hover:bg-sky-300 duration-300 md:border-b-0 ${
                  index < currentDepartment.length - 3 ? "lg:border-b" : ""
                } ${index % 3 !== 2 ? "md:border-r-0 lg:border-r" : ""}`}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={dept.icon}
                    alt={dept.name}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p>{dept.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevPage}
          className="p-2 text-white bg-blue-600 m-1 rounded-full hover:bg-blue-700 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextPage}
          className="p-2 text-white bg-blue-600 m-1 rounded-full hover:bg-blue-700 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Service;
