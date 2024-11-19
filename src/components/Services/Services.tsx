// components/DepartmentsSection.js
import React from "react";
import Image from "next/image";
import icon1 from "@public/assets/blood-test.png";
import icon2 from "@public/assets/cardiology.png";
import icon3 from "@public/assets/neurology.png";
import icon4 from "@public/assets/gastroenterology.png";
import icon5 from "@public/assets/tooth.png";
import icon6 from "@public/assets/medicine.png";

const departments = [
  {
    name: "Hematology",
    description:
      "The Clinical Hematology Department offers expert care for people with problems in their blood",
    icon: icon1,
  },
  {
    name: "Cardiology",
    description:
      "Our expert team of cardiologists provide 24 hour dedicated service to patients with heart conditions.",
    icon: icon2,
  },
  {
    name: "Neurology",
    description:
      "The Department of Neurology provides the best treatment of disorders affecting the nervous system.",
    icon: icon3,
  },
  {
    name: "Gastroenterology",
    description:
      "The Department of Gastroenterology provides the best care to patients with gastrointestinal disorders.",
    icon: icon4,
  },
  {
    name: "Dentist",
    description:
      "The Department of Dentistry is dedicated to providing the best dental healthcare to patients.",
    icon: icon5,
  },
  {
    name: "Internal Medicine",
    description:
      "The Internal Medicine Department focuses on the diagnosis and treatment of non surgical illnesses.",
    icon: icon6,
  },
];

const Service = () => {
  return (
    <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`p-6 text-center border-b border-[#0057B8] md:border-b-0 hover:bg-sky-200 duration-300 ${
              index < departments.length - 3 ? "lg:border-b" : ""
            } ${index % 3 !== 2 ? "md:border-r" : ""}`}
          >
            <div className="flex justify-center mb-4">
              <Image src={dept.icon} alt={dept.name} width={50} height={50} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
            <p>{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
