import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white ">
<section className="relative px-8 py-16 flex flex-col justify-center items-start min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Earth.jpg"
            alt="Earth"
            layout="fill"

        
        
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
        </div>
        <div className="relative z-10 bg-[#041531] p-8 rounded-md text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white">
            A Legacy of Quality, A Future of Innovation.
          </h1>
          <p className="mt-4 text-lg text-white">Discover the heritage and forward-thinking vision of Arcane Tobacco.</p>
          <button className="mt-6 px-6 py-3 bg-green-900 text-white rounded-md hover:bg-green-700">
            Discover more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
