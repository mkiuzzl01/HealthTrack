import React from "react";
import Specialists from "./__components/Specialists";
import Form from "./__components/Form";
import banner from "@public/assets/doctors/bg-1.jpg";

const Page = () => {
  return (
    <div>
      <section
        className="w-full bg-no-repeat bg-fixed bg-top relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.src})`,
        }}
      >
        <div className="text-center space-y-4 p-24 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">Our Expertise</h1>
          <p className="text-2xl"> Explore our expertise doctors</p>
        </div>

        {/* this is form */}
        <div className="bg-white">
          <Form />
        </div>
      </section>
      {/* section title */}
      <section>
        <div className="bg-white text-center p-10">
          <h2 className="text-3xl font-semibold"> OUR SPECIALISTS</h2>
          <p>We have all the professional specialists in our hospital</p>
        </div>
      </section>

      {/* specialists section */}
      <section>
        <div className="lg:w-3/4 mx-auto">
          <Specialists />
        </div>
      </section>
    </div>
  );
};

export default Page;
