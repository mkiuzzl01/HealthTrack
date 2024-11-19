import React from "react";
import { GiMedicines } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { ImLab } from "react-icons/im";
import { SlBadge } from "react-icons/sl";

const About = () => {
  const data = [
    {
      icon: <GiMedicines />,
      name: "E-Pharmacy",
      description:
        "Order medicines and health products online and get it delivered at home from licensed pharmacies",
    },
    {
      icon: <TiMessages />,
      name: "Online Consultations",
      description: "Consult qualified and registered doctors on chat for free",
    },
    {
      icon: <ImLab />,
      name: "Labs Tests",
      description:
        "Book lab tests online for hassle-free, home sample collection service. Get reports online.",
    },
    {
      icon: <SlBadge />,
      name: "Authentic Information",
      description:
        "Read medicine and health content written by qualified doctors and health professionals",
    },
  ];

  return (
    <div className="px-10 lg:px-0 space-y-16 relative">
      <div className="lg:lg:w-3/4 mx-auto">
        <div className="text-center py-10">
          <h1 className="text-3xl font-semibold">About HealthTrack</h1>
          <p>USA leading digital consumer healthcare platform</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly pb-10 mb-10">
          {data?.map((item, index) => (
            <div key={index} className="text-center space-y-4 w-full">
              <div className="text-6xl flex justify-center">{item?.icon}</div>
              <h1 className="font-bold text-xl">{item?.name}</h1>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
