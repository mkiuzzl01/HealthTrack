import React from "react";
import Specialists from "./__components/Specialists";
import Form from "./__components/Form";
import banner from "@public/assets/doctors/bg-1.jpg";

const Page = () => {
  return (
    <div>
      <section className="relative">
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.src})`,
          }}
        >
          <div className="text-center space-y-4 text-white p-24">
            <h1 className="text-3xl lg:text-5xl font-bold">Our Doctors</h1>
            <p className="text-2xl">Explore our expertise doctors</p>
          </div>
        </div>
        {/* this is form section */}
        <div className="mx-2">
          <Form />
        </div>
      </section>
      {/* Section Title */}
      <section>
        <div className="bg-white text-center p-10">
          <h2 className="text-3xl font-semibold uppercase">
            OUR Expertise Doctors
          </h2>
          <p>We have all the professional specialists in our hospital</p>
        </div>
      </section>

      {/* Specialists Section */}
      <section>
        <div className="lg:w-3/4 mx-auto">
          <Specialists />
        </div>
      </section>
    </div>
  );
};

export default Page;
