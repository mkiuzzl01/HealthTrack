import React from "react";
import image1 from "@public/assets/doctors/aboutus1-04.jpg";
import image2 from "@public/assets/doctors/aboutus1-05.jpg";
import image3 from "@public/assets/doctors/aboutus1-06.jpg";
import Image from "next/image";
import Link from "next/link";

const Tips = () => {
  const data = [
    {
      image: image1,
      type: "Creative Product",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
      actionName: "Shop Now",
      ActionLink: "/pharmacy",
    },
    {
      image: image2,
      type: "Press & Media",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
      actionName: "Visit Blog",
      ActionLink: "/gallery",
    },
    {
      image: image3,
      type: "Career Opportunities",
      description: "Cur tantas regiones barbarorum pedibus obiit, tot maria.",
      actionName: "Join our Team",
      ActionLink: "/education",
    },
  ];

  return (
    <div  className="bg-gray-200 mt-10 px-4">
      <div className="text-center py-24">
        <h1 className="text-3xl font-semibold">
          How we bring you closer to better health
        </h1>
        <p >
          Over the past three years, we've worked to build a healthcare platform
          that not only delivers medicine <br /> – but a platform that guides customers
          to the right and affordable care. Today, Medilazar is present in 1000+
          cities– And we’re just getting started.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        {data?.map((item, index) => (
          <div key={index}>
            <Image src={item?.image} alt={item?.type} />
            <div className="text-center py-10 space-y-4">
              <h3 className="font-semibold">{item?.type}</h3>
              <p>{item?.description}</p>
              <div>
                <Link href={item?.ActionLink}>
                  <button className="px-6 py-2 text-white  bg-sky-400 rounded-full hover:bg-sky-600">
                    {item?.actionName}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
