import React from "react";
import Department from "./__components/Department";
import banner from "@public/assets/department/banner-department.jpg";
import Form from "./__components/Form";

const page = () => {
  return (
    <div>
      <section className="relative">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.src})`,
          }}
        >
          <div className="text-center space-y-4 text-white py-24">
            <h1 className="text-3xl lg:text-5xl font-bold">Our Department</h1>
            <p className="text-2xl">Explore our department or consultation</p>
          </div>
        </div>
        {/* Form Section */}
        <div>
          <Form />
        </div>
      </section>

      {/* Department Section */}
      <section>
        <div className="bg-white text-center p-10">
          <h1 className="lg:text-3xl text-xl uppercase">
            Explore Our Specialized Departments
          </h1>
          <p className="text-sm lg:text-lg">
            Our hospital is home to a wide range of specialized departments
            dedicated to providing exceptional healthcare services.
          </p>
        </div>
      </section>

      <section>
        <Department />
      </section>
    </div>
  );
};

export default page;
