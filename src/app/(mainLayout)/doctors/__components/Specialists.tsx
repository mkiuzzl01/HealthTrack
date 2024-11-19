"use client";
import Image from "next/image";
import specialist1 from "@public/assets/team-1.jpg";
import specialist2 from "@public/assets/team-2.jpg";
import specialist3 from "@public/assets/team-3.jpg";
import specialist4 from "@public/assets/team-4.jpg";

interface Specialist {
  name: string;
  specialty: string;
  image: any;
}

const Specialists = () => {
  const specialists: Specialist[] = [
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
    <section className="h-screen">
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5 h-full">
        <section className="h-[calc(100%-12rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {specialists.map((specialist, index) => (
              <div
                key={`${specialist.name}-${index}`}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-sky-500 group-hover:w-2/3 transition-all duration-300" />

                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    {specialist.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {specialist.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Specialists;
