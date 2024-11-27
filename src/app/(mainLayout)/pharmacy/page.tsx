import React from "react";
import banner from "@public/assets/pharmacy/banner-service.jpg";
import Form from "./__components/Form";
import Medicine from "./__components/Medicine";

const page = () => {
  return (
    <div>
      <section className="relative">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.src})`,
          }}
        >
          <div className="text-center space-y-4 text-white py-24">
            <h1 className="text-3xl lg:text-5xl font-bold">Our Medicine</h1>
            <p className="text-2xl"> Your Health, Our Priority</p>
          </div>
        </div>

        {/* this is form */}
        <div className="mx-2">
          <Form />
        </div>
      </section>
      {/* section title */}
      <section>
        <div className="bg-white text-center p-10">
          <h2 className="text-3xl font-semibold uppercase">
            {" "}
            Explore OUR Medicine
          </h2>
          <p>
            Your trusted source for quality medicines, healthcare products, and
            expert advice. Serving your needs with care and dedication.
          </p>
        </div>
      </section>

      {/* medicine section */}
      <section>
        <div className="mx-2 lg:mx-0">
          <Medicine />
        </div>
      </section>
    </div>
  );
};

export default page;
