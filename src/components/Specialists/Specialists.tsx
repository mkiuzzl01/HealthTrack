"use client";
import Image from "next/image";
import specialist1 from "../../../public/assets/team-1.jpg";
import specialist2 from "../../../public/assets/team-2.jpg";
import specialist3 from "../../../public/assets/team-3.jpg";
import specialist4 from "../../../public/assets/team-4.jpg";

const Specialists = () => {
  const specialists = [
    {
      name: "Linda Flores",
      specialty: "Gynecologists",
      image: specialist4,
    },
    {
      name: "Glenn Arredondo",
      specialty: "Family Physicians",
      image: specialist1,
    },
    {
      name: "Dorthy Winters",
      specialty: "Gastroenterologists",
      image: specialist2,
    },
    {
      name: "Christopher",
      specialty: "Medicine Specialists",
      image: specialist3,
    },
    {
      name: "Linda Flores",
      specialty: "Gynecologists",
      image: specialist4,
    },
    {
      name: "Glenn Arredondo",
      specialty: "Family Physicians",
      image: specialist1,
    },
  ];

  return (
    <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-32">
      <div className="text-center">
        <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-gray-800 uppercase">
          Our Specialists
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We have all the professional specialists in our hospital
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {specialists.map((specialist) => (
          <div key={specialist.name} className="text-center">
            <Image
              src={specialist.image}
              alt={specialist.name}
              className="mx-auto mb-4"
              width={400}
              height={200}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {specialist.name}
            </h3>
            <p className="mt-2 text-gray-600">{specialist.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
