import React from "react";
import { mealData } from "../assets/data";

const Ourmeal = () => {
  return (
    <div>
      <div className="px-8  py-12 w-full  max-w-[1520px] ">
        <h1 className="text-orange-600 text-xl font-bold text-center mb-6">
          Our Meal
        </h1>
        <div className=" grid md:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-5">
          {mealData.map((item) => {
            const str = item.name;
            const result = str.charAt(0).toUpperCase() + str.slice(1);

            return (
              <div className="flex flex-col duration-300 ease-out hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" object-cover rounded-md   h-[200px] w-full"
                />

                <div className="flex justify-between px-2 py-1">
                  <p className="font-bold">{result}</p>
                  <p className="bg-orange-500 border-8 h-18 w-18 px-3 text-white py-4 rounded-full -mt-10">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourmeal;
