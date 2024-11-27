import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({arr}:any) => {
  return (
    <section className="p-5">
      <div className="flex justify-center items-center gap-2">
        <button className="p-2 bg-gray-300 flex items-center hover:bg-gray-400">
          <span className="p-1">
            <FaArrowLeft />
          </span>
          Prev
        </button>
        {arr.map((item, index) => (
          <div key={index}>
            <button className="bg-gray-300 p-2 rounded-full ">
            {(index+1).toString().substring(0, 1)}
            </button>
          </div>
        ))}
        <button className="p-2 bg-gray-300 flex items-center hover:bg-gray-400">
          Next
          <span className="p-1">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Pagination;
