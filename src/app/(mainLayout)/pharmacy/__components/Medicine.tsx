import React from "react";
import image1 from "@public/assets/pharmacy/medicine_1.jpg";
import image2 from "@public/assets/pharmacy/medicine_2.jpg";
import image3 from "@public/assets/pharmacy/medicine_3.jpg";
import Image from "next/image";

const medicines = [
  {
    name: "Paracetamol",
    description:
      "A widely used over-the-counter pain reliever and fever reducer. Commonly used for mild to moderate pain such as headaches or colds.",
    image: image1,
    price: {
      unitPrice: 0.08,
      packPrice: 7.5,
      currency: "USD",
    },
  },
  {
    name: "Ibuprofen",
    description:
      "A nonsteroidal anti-inflammatory drug (NSAID) for reducing fever, pain, and inflammation. Effective for arthritis, menstrual pain, and toothaches.",
    image: image2,
    price: {
      unitPrice: 0.15,
      packPrice: 6.5,
      currency: "USD",
    },
  },
  {
    name: "Amoxicillin",
    description:
      "A broad-spectrum antibiotic used to treat bacterial infections such as ear infections, respiratory tract infections, and UTIs.",
    image: image3,
    price: {
      unitPrice: 0.4,
      coursePrice: 8.5,
      currency: "USD",
    },
  },
  {
    name: "Cetirizine",
    description:
      "An antihistamine used to treat allergies, hay fever, and cold-related symptoms such as a runny nose and itchy eyes.",
    image: image2,
    price: {
      unitPrice: 0.18,
      packPrice: 5.0,
      currency: "USD",
    },
  },
  {
    name: "Metformin",
    description:
      "An oral diabetes medication used to control blood sugar levels in individuals with type 2 diabetes.",
    image: image1,
    price: {
      unitPrice: 0.25,
      packPrice: 12.0,
      currency: "USD",
    },
  },
  {
    name: "Salbutamol",
    description:
      "A bronchodilator for treating breathing problems like asthma and COPD. It relaxes airway muscles.",
    image: image3,
    price: {
      inhalerPrice: 7.0,
      tabletUnitPrice: 0.3,
      currency: "USD",
    },
  },
  {
    name: "Ranitidine",
    description:
      "Previously used for acid reflux and heartburn. Recalled in some regions; alternatives recommended.",
    image: image1,
    price: {
      unitPrice: 0.2,
      packPrice: 5.5,
      currency: "USD",
    },
  },
];

const Medicine = () => {
  return ( 
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
      {medicines?.map((medicine, index) => (
        <div key={index} className="border-2 p-4">
          <div className="w-full flex justify-center items-center ">
            <Image src={medicine?.image} alt={medicine?.name} className="object-cover h-52" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{medicine?.name}</h1>
            <p>
              {" "}
              Unit Price / Pack Price:
              {medicine?.price?.packPrice || medicine?.price?.tabletUnitPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Medicine;
