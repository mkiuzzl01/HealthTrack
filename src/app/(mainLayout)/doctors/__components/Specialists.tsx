"use client";
import Image from "next/image";
import specialist1 from "@public/assets/team-1.jpg";
import specialist2 from "@public/assets/team-2.jpg";
import specialist3 from "@public/assets/team-3.jpg";
import specialist4 from "@public/assets/team-4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface type {
  name: string;
  specialty: string;
  image: any;
}

const Specialists = () => {
  const specialists: type[] = [
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
      name: "Glenn",
      specialty: "Family Physicians",
      image: specialist1,
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
    {
      name: "Linda Flores",
      specialty: "Gynecologists",
      image: specialist4,
    },
  ];

  return (
    <section>
      <div className="lg:px-0 px-5">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <div key={`${specialist.name}-${index}`} className="">
                <div className="">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    className=""
                    width={300}
                    height={200}
                  />
                  <div className="" />
                </div>

                <div className="">
                  <div className="" />

                  <h3 className="text-xl font-semibold">{specialist.name}</h3>
                  <p className="">{specialist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* pagination */}
        <section>
          <div className="flex justify-center items-center my-5">
            <button className="p-2 bg-gray-300 flex items-center hover:bg-gray-400">
              {" "}
              <span className="p-1">
                {" "}
                <FaArrowLeft></FaArrowLeft>{" "}
              </span>{" "}
              Prev
            </button>
            {specialists.map((item, index) => (
              <div key={index}>
                <button className="bg-gray-300 p-2 rounded-full m-1">
               {index+1}
                </button>
              </div>
            ))}
            <button className="p-2 bg-gray-300 flex items-center hover:bg-gray-400">
              Next{" "}
              <span className="p-1">
                {" "}
                <FaArrowRight></FaArrowRight>{" "}
              </span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Specialists;
