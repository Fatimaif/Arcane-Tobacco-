import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="bg-white p-4">
      <section className="relative px-8 py-16 flex flex-col justify-center items-start min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cfroom.jpg"
            alt="cfroom"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-left flex flex-col justify-end h-full">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
            Who We Are
          </h1>
          <p className="mt-4 text-white">
            As a proud member of the Arcane Holdings group, Arcane Tobacco is a leading, <br />
            multi-category consumer goods business with an international footprint.
          </p>
          <button className="mt-6 px-8 w-fit py-2 bg-transparent text-white rounded-4xl border border-white hover:bg-white hover:text-black">
            Explore more
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
