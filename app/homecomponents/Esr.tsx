import React from "react";
import Image from "next/image";

const Esr = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 bg-white">
      <div className="md:col-span-2 grid md:grid-cols-2 h-full bg-white shadow-lg  overflow-hidden">
        <div className="bg-blue-950 text-white flex flex-col justify-center p-8">
          <div className="flex-grow flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Sustainability and Responsibility
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              We are committed to sustainable practices <br /> that create shared
              value for all of our <br /> stakeholders. This includes operating to
              the <br /> highest standards of corporate conduct and <br />
              transparency.
            </p>
          </div>
          <a
            href="#"
            className="font-semibold hover:underline"
          >
            Explore more &gt;
          </a>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/windmil.jpg"
            alt="windmil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
       <div className="bg-white h-full overflow-hidden flex flex-col">
        <div className="h-1/2">
          <Image
            src="/trading.jpg"
            alt="trading"
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
    
        <div className="bg-blue-950 bg-opacity-90 flex flex-col p-8 justify-between  text-white p-4 h-1/2">
          <h2 className="text-xl font-bold mb-2">Investors and Reporting</h2>
          <p className="text-sm mb-4 ">
            In this section we provide key financial data <br/> and company
            information, including our <br/> financial reporting to shareholders.
          </p>
          <a href="#" className="font-semibold hover:underline">

          
          
          </a>
        </div>
      </div>
    </div>
  );
};

export default Esr;