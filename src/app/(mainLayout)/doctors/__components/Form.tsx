"use client";

const Form = () => {
  return (
    <div className="bg-slate-300 w-full md:w-3/4 m-auto p-10 shadow-lg rounded-md relative bottom-16  left-0 right-0">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Find a doctor</h3>

      {/* input form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="mb-1 md:col-span-2">
            <label className="block text-gray-700 uppercase font-bold mb-2">
              Search By
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border focus:border-blue-600 focus:outline-none"
              placeholder="Doctor's name"
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 uppercase font-bold mb-2">
              BRANCH
            </label>
            <select
              name=""
              id=""
              className="w-full p-3 rounded-lg border focus:border-blue-600 focus:outline-none"
            >
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
            <select
              name=""
              id=""
              className="w-full p-3 rounded-lg border focus:border-blue-600 focus:outline-none"
            >
              <option value="" defaultChecked>
                Select Branch
              </option>
              <option value="Hematology">Hematology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Gastroenterology">Gastroenterology</option>
            </select>
          </div>
          <div className="">
            <button className="uppercase bg-sky-400 px-4 py-2 font-semibold hover:shadow-lg rounded-lg ">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
