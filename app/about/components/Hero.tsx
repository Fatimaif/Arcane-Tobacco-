import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="relative px-8 py-16 flex flex-col justify-center items-start min-h-[500px]">
        <div className="absolute inset-0 z-0 m-10">
          <Image src="/Earth.jpg" alt="Earth" layout="fill" />
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="absolute z-10  bg-[#041531] p-8  h-[200px]  text-left min-w-[50%] top-1/2 left-10 -translate-y-1/2 m-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white">
              Profile of Company
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
