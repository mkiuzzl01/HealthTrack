import doctors from "@public/assets/Doctors.png";
import Image from "next/image";
import DiamondIcon from "@mui/icons-material/Diamond";

const Consult = () => {
  return (
    <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:px-0 px-5 my-32">
      <div>
        <h2 className="mb-3 text-3xl">
          Consult With <br />{" "}
          <span className="font-bold">The Best Doctors</span>
        </h2>
        <p className="mb-3 font-medium text-gray-600">
          Our highly skilled team of healthcare professionals are at your
          service to give you the best medical care.
        </p>
        <ul className="mb-3 font-medium text-gray-600">
          <li className="flex items-center gap-2">
            <DiamondIcon className="text-[#0057B8] text-xl" />
            24/7 Emergency Hotline
          </li>
          <li className="flex items-center gap-2">
            <DiamondIcon className="text-[#0057B8] text-xl" />
            State-Of-The-Art Equipment
          </li>
          <li className="flex items-center gap-2">
            <DiamondIcon className="text-[#0057B8] text-xl" />
            Highly Trained Staff
          </li>
        </ul>
        <button className="bg-[#0057B8] px-5 py-3 rounded-full font-semibold text-white mt-5">
          Make An Appointment
        </button>
      </div>
      <div>
        <Image src={doctors} height={400} width={400} alt={doctors} />
      </div>
    </div>
  );
};

export default Consult;
