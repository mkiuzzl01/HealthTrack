import Image from "next/image";
import specialist1 from "@public/assets/team-1.jpg";
import specialist2 from "@public/assets/team-2.jpg";
import specialist3 from "@public/assets/team-3.jpg";
import specialist4 from "@public/assets/team-4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Pagination from "@/utils/Pagination";

interface type {
  id: string;
  name: string;
  specialty: string;
  image: any;
}

const specialists: type[] = [
  {
    id: "01",
    name: "Linda Flores",
    specialty: "Gynecologists",
    image: specialist4,
  },
  {
    id: "02",
    name: "Glenn Aredondo",
    specialty: "Family Physicians",
    image: specialist1,
  },
  {
    id: "03",
    name: "Dorthy Winters",
    specialty: "Gastroenterologists",
    image: specialist2,
  },
  {
    id: "04",
    name: "Christopher",
    specialty: "Medicine Specialists",
    image: specialist3,
  },
];

const Specialists = () => {
  return (
    <section>
      <div className="lg:px-0 px-5">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <div key={`${specialist.name}-${index}`} className="border-2">
                <div className="group relative overflow-hidden duration-150">
                  <div className="overflow-hidden">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="border-2 text-white px-4 py-2 rounded hover:bg-indigo-600 duration-300">
                      <Link href={specialist?.id}>View Profile</Link>
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{specialist.name}</h3>
                  <p className="text-gray-500">{specialist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Pagination */}
        <Pagination arr={specialists}></Pagination>
      </div>
    </section>
  );
};

export default Specialists;
