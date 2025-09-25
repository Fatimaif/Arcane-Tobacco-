import React from "react";

const Career = () => {
  return (
    <div className="bg-pink-600 text-white py-5 px-8 mt-8 flex flex-col md:flex-row items-center justify-between ">
      <div className="tracking-[0.3em] text-sm font-light mb-4 md:mb-0">
        CAREERS AT ARCANE HOLDINGS
      </div>

      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-lg font-semibold">A FUTURE OF INNOVATION AWAITS</h2>
        <p className="text-sm">
          Visit our Careers site and help us build a better future.
        </p>
      </div>
      <div>
        <a
          href="#"
          className="border border-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-pink-600 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Career;
