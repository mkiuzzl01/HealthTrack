import React from "react";

import icon1 from "@public/assets/servicesStat/Ambulance.png";
import icon2 from "@public/assets/servicesStat/appointment.png";
import icon3 from "@public/assets/servicesStat/doctors.png";
import icon4 from "@public/assets/servicesStat/diagnostic.png";
import Image from "next/image";

const ServicesStat = () => {
  const servicesStat = [
    {
      name: "24/7 Emergency Care",
      icon: icon1,
    },
    {
      name: "Online Appointment",
      icon: icon2,
    },
    {
      name: "Specialist Consultations",
      icon: icon3,
    },
    {
      name: "Advanced Diagnostics",
      icon: icon4,
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
        {servicesStat.map((item, index) => (
          <div key={index} className="flex items-center p-5 border-b-2 hover:border-blue-500 duration-300">
            <Image src={item.icon} alt={item.name} width={50} height={50}/>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesStat;
