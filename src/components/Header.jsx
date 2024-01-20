import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";

const Header = () => {
  const [sideNav, setsideNave] = useState(false);
  return (
    <>
      <div className="p-2 px-4 max-w-[1520px]  m-auto flex justify-between shadow">
        <div className="menu-icon flex items-center ">
          <div
            className="menu-icon"
            onClick={() =>
              setsideNave(!sideNav) ? console.log("Show") : console.log("Hide")
            }
          >
            <IoMdMenu size={30} />
          </div>
          <div className="logo font-bold px-4 text-2xl sm:text-3xl lg:text-3xl">
            Yummy
            <span className="">Foods</span>
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
        {sideNav ? (
          <div
            className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
            onClick={() => setsideNave(!sideNav)}
          ></div>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          sideNav
            ? "fixed bg-white left-0 top-0 w-[300px] h-screen z-10 duration-200"
            : "fixed bg-white left-[-100%] top-0 w-[300px] h-screen z-10 duration-200"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setsideNave(!sideNav)}
        />
        <h2 className="text-2xl p-4 font-bold">
          Yummy <span className="text-orange-500">Foods</span>
        </h2>
        <nav>
          <ul className="flex flex-col text-gray-900 p-4">
            <li className="text-xl py-4  flex">
              <BsPerson
                size={30}
                className="mr-4 rounded-full bg-black text-white"
              />
              My Account
            </li>
            <li className="text-xl py-4  flex">
              <TbTruckReturn
                size={30}
                className="mr-4 rounded-full bg-black text-white"
              />
              Delivery
            </li>
            <li className="text-xl py-4  flex">
              <MdOutlineFavoriteBorder
                size={30}
                className="mr-4 rounded-full bg-black text-white"
              />
              My Favourite
            </li>
            <li className="text-xl py-4  flex">
              <FaGoogleWallet
                size={30}
                className="mr-4 rounded-full bg-black text-white"
              />
              My Wallet
            </li>
            <li className="text-xl py-4  flex">
              <IoMdHelp
                size={30}
                className="mr-4 rounded-full bg-black text-white"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
