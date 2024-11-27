"use client"

const Form = () => {
  return (
    <div className="bg-slate-300 w-full md:w-3/4 shadow-lg m-auto relative left-0 right-0 bottom-16 rounded-md">
      <form>
        <div className="mb-1 md:col-span-2 p-10 shadow-lg">
          <label className="block text-gray-700 uppercase font-bold mb-1">
            Search By
          </label>
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="w-full p-3 rounded-s-full border-s border-y focus:border-blue-600 focus:outline-none"
              placeholder="Medicine's name "
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
