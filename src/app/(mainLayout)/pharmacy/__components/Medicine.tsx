import React from "react";
import image1 from "@public/assets/pharmacy/medicine_1.png";
import image2 from "@public/assets/pharmacy/medicine_2.jpg";
import image3 from "@public/assets/pharmacy/medicine_3.jpg";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/utils/Pagination";

const medicines = [
  {
    id: "01",
    name: "Paracetamol",
    description:
      "A widely used over-the-counter pain reliever and fever reducer. Commonly used for mild to moderate pain such as headaches or colds.",
    image: image1,
    price: {
      packPrice: 7.5,
    },
  },
  {
    id: "02",
    name: "Ibuprofen",
    description:
      "A nonsteroidal anti-inflammatory drug (NSAID) for reducing fever, pain, and inflammation. Effective for arthritis, menstrual pain, and toothaches.",
    image: image2,
    price: {
      packPrice: 6.5,
    },
  },
  {
    id: "03",
    name: "Amoxicillin",
    description:
      "A broad-spectrum antibiotic used to treat bacterial infections such as ear infections, respiratory tract infections, and UTIs.",
    image: image3,
    price: {
      packPrice: 8.5,
    },
  },
  {
    id: "04",
    name: "Amoxicillin",
    description:
      "A broad-spectrum antibiotic used to treat bacterial infections such as ear infections, respiratory tract infections, and UTIs.",
    image: image3,
    price: {
      packPrice: 8.5,
    },
  },
  {
    id: "05",
    name: "Cetirizine",
    description:
      "An antihistamine used to treat allergies, hay fever, and cold-related symptoms such as a runny nose and itchy eyes.",
    image: image2,
    price: {
      packPrice: 5.0,
    },
  },
  {
    id: "06",
    name: "Metformin",
    description:
      "An oral diabetes medication used to control blood sugar levels in individuals with type 2 diabetes.",
    image: image1,
    price: {
      packPrice: 12.0,
    },
  },
  {
    id: "07",
    name: "Salbutamol",
    description:
      "A bronchodilator for treating breathing problems like asthma and COPD. It relaxes airway muscles.",
    image: image3,
    price: {
      packPrice: 7.0,
    },
  },
  {
    id: "08",
    name: "Ranitidine",
    description:
      "Previously used for acid reflux and heartburn. Recalled in some regions; alternatives recommended.",
    image: image1,
    price: {
      packPrice: 5.5,
    },
  },
];

const Medicine = () => {
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mb-4">
        {medicines?.map((medicine, index) => (
          <div
            key={index}
            className="relative group border-2 rounded overflow-hidden p-2"
          >
            <div className="w-full flex justify-center items-center group-hover:scale-110 duration-300 ">
              <Image
                src={medicine?.image}
                alt={medicine?.name}
                placeholder="blur"
                className="object-cover h-52 w-full p-4"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold">{medicine?.name}</h1>
              <p>
                Unit Price:
                <span className="font-semibold ps-2">
                  {medicine?.price?.packPrice}
                </span>
              </p>
            </div>
            <div
              className="absolute inset-0 bg-blue-500 bg-opacity-50 
              flex flex-col justify-center items-center text-center 
              p-4 opacity-0 group-hover:opacity-100 
              -translate-y-full group-hover:translate-y-0 
              transition-all duration-500"
            >
              <Link href={`View_Details/${medicine?.id}`}>
                <button className="border-2 border-white text-white px-4 py-2 rounded hover:bg-indigo-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <Pagination arr={medicines}></Pagination>
    </div>
  );
};

export default Medicine;
