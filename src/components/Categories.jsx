import React from "react";
import { categories } from "../assets/data";

const Categories = () => {
  return (
    <div>
      <div className="px-8  py-12 w-full  max-w-[1520px] ">
        <h1 className="text-orange-600 text-3xl font-bold text-center mb-6">
          Trending Categories
        </h1>
        <div className=" grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6  gap-5">
          {categories.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col duration-300 ease-out hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" object-cover rounded-md h-10  w-40"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
