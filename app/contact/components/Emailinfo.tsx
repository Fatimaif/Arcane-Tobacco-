import React from "react";

const Emailinfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between   py-7 p-10 bg-white text-gray-900">
      <div className="md:w-1/2 space-y-2 text-left">
        <h2 className="font-semibold">Arcane Tobacco Company Limited</h2>
        <p>512, 5th Avenue, 17th Floor</p>
        <p>New York, NY 10175</p>
        <p>United States</p>
        <div className="mt-4">
          <p>
            Tel:{" "}
            <a href="tel:+13479053563" className="text-blue-950">
              (347) 905-3563
            </a>
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 p-2 ">
        <form className="flex flex-col space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name: *</label>
            <input
              type="text"
              className="w-full border border-blue-950 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email: *</label>
            <input
              type="email"
              className="w-full border border-blue-950 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Please enter your questions or comments:
            </label>
            <textarea
              rows={4}
              className="w-full border border-blue-950 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-200 text-blue-950 w-fit font-medium py-2 px-6 rounded-full hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Emailinfo;

