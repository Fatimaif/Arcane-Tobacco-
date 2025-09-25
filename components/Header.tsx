import React from "react";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { IoMdPeople } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
const Header = () => {
  return (
    <div className="font-sans bg-white">
      <div className="flex justify-between  items-center p-6">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg text-black">
            Arcane <br /> <p className="text-green-900">Tobacco</p>{" "}
          </span>
        </div>
        <div className="flex-grow text-black flex justify-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-gray-200  flex flex-row items-center gap-1">
            <LiaBoxOpenSolid />Offerings
          </button>
          
          <button className="px-4 py-2 rounded-full bg-gray-200  flex flex-row items-center gap-1">
            <IoMdPeople />Who we are
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200  flex flex-row items-center gap-1">
           <MdAddBusiness /> Careers
          </button>
        </div>
        <div>
          <button className="px-4 py-2 rounded-xl bg-green-900 text-white hover:bg-green-800">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
