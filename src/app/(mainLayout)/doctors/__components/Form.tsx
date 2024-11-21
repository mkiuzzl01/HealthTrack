"use client";

const Form = () => {
  return (
    <div className="bg-slate-200 md:p-10 p-8  rounded-lg  md:w-3/4 mx-1 md:m-auto relative -top-20 z-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Find a doctor</h3>

      {/* input form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-1 md:col-span-2">
            <label className="block text-gray-700 uppercase font-bold mb-2">
              Search By
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg "
              placeholder="Doctor's name"
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 uppercase font-bold mb-2">
              BRANCH
            </label>
            <select name="" id="" className="w-full p-3 rounded-lg ">
              <option value="" defaultChecked>
                Select Branch
              </option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="Ghulshan">Ghulshan</option>
              <option value="Bashundhara">Bashundhara</option>
              <option value="Baridhara">Baridhara</option>
            </select>
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 uppercase font-bold mb-2">
              SPECIALTY
            </label>

            <input
              type="text"
              className="w-full p-3 rounded-lg "
              placeholder="Specialty"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="uppercase bg-sky-400 px-4 py-2 font-bold hover:shadow-lg rounded-lg ">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
