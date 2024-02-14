import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="px-8  pt-8 w-full flex text-white bg-[#24262b] max-w-[1520px] ">
        <div className="flex flex-col justify-start w-[50%]">
          <h1 className="text-orange-600 text-3xl font-bold  mb-6">
            YammyFood
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            nostrum reprehenderit quo modi iste sequi ipsam nulla aspernatur
            quia temporibus. Nemo asperiores inventore sed minus iure, similique
            itaque accusamus saepe!
          </p>
          <div className="flex my-6 justify-between md:w-[50%]">
            <FaDribbbleSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="flex px-5 justify-between w-[50%]">
          <div className="flex flex-col">
            <h6 className="text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="text-sm py-2">New York</li>
              <li className="text-sm py-2">USA</li>
              <li className="text-sm py-2">Pakistan</li>
              <li className="text-sm py-2">Canada</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h6 className="text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="text-sm py-2">New York</li>
              <li className="text-sm py-2">USA</li>
              <li className="text-sm py-2">Pakistan</li>
              <li className="text-sm py-2">Canada</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="text-sm py-2">New York</li>
              <li className="text-sm py-2">USA</li>
              <li className="text-sm py-2">Pakistan</li>
              <li className="text-sm py-2">Canada</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h6 className="text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="text-sm py-2">New York</li>
              <li className="text-sm py-2">USA</li>
              <li className="text-sm py-2">Pakistan</li>
              <li className="text-sm py-2">Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
