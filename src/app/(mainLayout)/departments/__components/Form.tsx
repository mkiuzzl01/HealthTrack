import React from "react";

const Form = () => {
  return (
    <div className="w-full md:w-3/4 m-auto absolute top-[17rem]">
      <form>
        <div className="mb-1 md:col-span-2 bg-gray-100 p-10 rounded-md ">
          <label className="block text-gray-700 uppercase font-bold mb-2">
            Search By
          </label>
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="w-full p-3 rounded-s-full border-s border-y focus:border-blue-600 focus:outline-none"
              placeholder="Department's name "
            />
            <button className="py-3 px-4 bg-blue-600 rounded-e-full text-white font-semibold hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
