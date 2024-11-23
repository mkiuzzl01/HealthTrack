"use client";
import headerImage from "@public/assets/department/banner-department.jpg";
import Form from "./Form";

const Header = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage.src})`,
        }}
      >
        <div className="text-center space-y-4 p-16 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">Our Department</h1>
          <p className="text-2xl"> Explore our department or consultation</p>
        </div>

        {/* this is form */}
        <div className="md:w-3/4 m-auto">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Header;
