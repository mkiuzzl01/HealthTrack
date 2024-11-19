import React from "react";
import banner2 from "@public/assets/about/aboutus1-07.jpg";

const Banner2 = () => {
  return (
    <div className="mt-10">
      <div
        style={{
          backgroundImage: `url(${banner2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-36 text-white text-center space-y-4"
      >
        <h1 className="text-4xl font-semibold">
          We Are Available. Interested in Collaboration?
        </h1>
        <button className="px-6 py-3 bg-sky-400 hover:bg-sky-600 rounded-full font-bold">
          Get In Tech
        </button>
      </div>
    </div>
  );
};

export default Banner2;
