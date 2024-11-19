import React from "react";
import doctor1 from "@public/assets/doctors/team01.jpg";
import doctor2 from "@public/assets/doctors/team02.jpg";
import doctor3 from "@public/assets/doctors/team03.jpg";
import doctor4 from "@public/assets/doctors/team04.jpg";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MeetOurDoctors = () => {
  const data = [
    {
      image: doctor1,
      name: "Dr. James Carter",
      designation: "Cardiologist",
    },
    {
      image: doctor2,
      name: "Dr. Sophia Bennett",
      designation: "Neurologist",
    },
    {
      image: doctor3,
      name: "Dr. William Anderson",
      designation: "Orthopedic Surgeon",
    },
    {
      image: doctor4,
      name: "Dr. Olivia Taylor",
      designation: "Pediatrician",
    },
  ];

  return (
    <div className="flex gap-4 flex-col items-center lg:flex-row justify-evenly">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative group">
            <Image src={item.image} alt={item.name} className="rounded-full" />
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
              <div className="flex space-x-4 text-xl">
                <div className="bg-blue-400 p-2 rounded-full text-white hover:text-black">
                  <Link href="/">
                    <CiFacebook />
                  </Link>
                </div>
                <div className="bg-blue-400 p-2 rounded-full text-white hover:text-black">
                  <Link href="/">
                    <CiYoutube />
                  </Link>
                </div>
                <div className="bg-blue-400 p-2 rounded-full text-white hover:text-black">
                  <Link href="/">
                    <CgMail />
                  </Link>
                </div>
                <div className="bg-blue-400 p-2 rounded-full text-white hover:text-black">
                  <Link href="/">
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-semibold">{item.name}</h1>
            <p className="text-sm text-gray-600">{item.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetOurDoctors;
