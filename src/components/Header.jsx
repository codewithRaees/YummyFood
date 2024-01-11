import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="p-2 px-4 max-w-[1520px]  m-auto flex justify-between">
        <div className="menu-icon flex items-center ">
          <IoMdMenu size={30} />
          <div className="logo font-bold px-4 text-2xl sm:text-3xl lg:text-3xl">
            Yummy
            <span className="">Food</span>
          </div>
          <div className="hidden lg:flex md:flex items-center p-[2px]  text-[14px] free-deliver  rounded-full bg-gray-200 font-bold ">
            <p className="bg-orange-700 rounded-full p-2 text-white ">Free</p>
            <p className="px-1 py-1">Delivery</p>
          </div>
        </div>
        <div className="search-bar mx-1 flex bg-gray-200 px-2 items-center  rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
          <IoSearchOutline size={30} />
          <input
            type="text"
            className="bg-transparent p-2 focus:outline-none w-full"
            placeholder
          />
        </div>
        <button className="bg-orange-700 px-2 text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={25} /> <span className="px-1">Cart</span>
        </button>
      </div>
    </>
  );
};

export default Header;
