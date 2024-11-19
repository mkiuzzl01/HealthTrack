"use client";
import Image from "next/image";
import about1 from "../../../public/assets/about-1.jpg";
import about2 from "../../../public/assets/about-2.jpg";
import about3 from "../../../public/assets/about-3.jpg";

const About = () => {
  return (
    <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Image
                src={about1}
                width={500}
                height={500}
                alt="Doctor"
                className="w-full h-full"
              />
            </div>
            <div>
              <Image
                src={about2}
                width={500}
                height={500}
                alt="Healthcare staff"
                className="w-full h-full"
              />
            </div>
          </div>
          <Image
            src={about3}
            width={500}
            height={500}
            alt="Family with doctor"
            className="w-full h-full mt-5"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-gray-800 border-l-4 border-[#0057B8] pl-2 uppercase">
              WHO WE ARE
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                1K+ Healing Hands
              </h3>
              <p className="text-gray-600 text-justify">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Proin eget tortor risus.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Experienced Doctors
              </h3>
              <p className="text-gray-600 text-justify">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Proin eget tortor risus.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Advanced Healthcare
              </h3>
              <p className="text-gray-600 text-justify">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Proin eget tortor risus.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                50+ Pharmacies
              </h3>
              <p className="text-gray-600 text-justify">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Proin eget tortor risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
