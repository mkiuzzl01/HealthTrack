import React from "react";
import about_us_banner1 from "@public/assets/about/aboutus1-01.jpg";

const Banner1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${about_us_banner1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        backgroundAttachment: "fixed",
        height: "auto",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center text-white space-y-8 py-36">
        <p className="lg:text-xl">
          Choose from over <span className="text-red-500">1400</span>{" "}
          professional
        </p>
        <h1 className="text-3xl lg:text-6xl">
          We make healthcare <br /> Understandable, Accessible and Affordable.
        </h1>
        <div className="pt-10">
          <button className="px-4 py-3 bg-sky-500 rounded-full">
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
