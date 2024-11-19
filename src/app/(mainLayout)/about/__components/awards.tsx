import Image from "next/image";
import React from "react";

import icon1 from "@public/assets/about/icon1.svg";
import icon2 from "@public/assets/about/icon2.svg";

const Awards = () => {
  const award = [
    {
      name: "Winner",
      type: "Wellness Awards",
    },
    {
      name: "Top 3",
      type: "Wellness Awards",
    },
    {
      name: "Winner",
      type: "Best New Product",
    },
    {
      name: "Top 35",
      type: "Innovative Awards",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-semibold pb-10">
        Honors and Awards
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {award.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-center">
            <Image src={icon1} alt="Start Icon" width={20} height={20} />
            <div>
              <h1 className="font-bold text-lg">{item.name}</h1>
              <p className="text-sm text-gray-600">{item.type}</p>
            </div>

            <Image src={icon2} alt="End Icon" width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
