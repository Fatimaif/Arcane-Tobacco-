import React from "react";

const Cta = () => {
  return (
    <div className="bg-white text-[#002147] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h4 className="font-semibold text-lg mb-3">Our Global Network</h4>
          <p className="text-sm text-gray-600 mb-4">
            Arcane Tobacco is a key part of Arcane Holdings, one of the world’s most international businesses. Explore our global presence.
          </p>
          <a
            href="#"
            className="block text-sm text-[#002147] border-t  border-t-blue-100 border-b border-b-blue-100 pt-2 pb-2 hover:underline"
          >
            Global Directory
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Careers</h4>
          <p className="text-sm text-gray-600 mb-4">
            Your difference could make all the difference. Visit the Arcane Holdings careers website to find out more about what it&apos;s like to work with us.
          </p>
          <a
            href="#"
            className="block text-sm text-[#002147] border-t  border-t-blue-100 border-b border-b-blue-100 pb-2 pt-2 hover:underline"
          >
            Arcane Holdings Careers
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Contact us</h4>
          <p className="text-sm text-gray-600">
            Arcane Tobacco Company Limited, 512, 5th Avenue, 17th Floor, New York, NY 10175, United States<br/> 
          </p>
          <p className="border-t border-t-blue-100 border-b border-b-blue-100  mt-4 pt-2 pb-2 text-sm">
            <span className="font-medium">Tel:</span> (347) 905-3563
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;