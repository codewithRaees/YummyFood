import React, { useState } from "react";
import { mealData } from "../assets/data";
import { FaArrowRight } from "react-icons/fa6";

const Ourmeal = () => {
  const [food, setFood] = useState(mealData);
  const FilteredCat = (category) => {
    setFood(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div>
      <div className="px-8  py-12 w-full  max-w-[1520px] ">
        <h1 className="text-orange-600 text-xl font-bold text-center mb-6">
          Our Meal
        </h1>
        <div className="flex justify-center m-2">
          <div className="flex justify-center m-4">
            <button
              onClick={() => setFood(mealData)}
              className="m-1 border-2 border-orange-700 rounded-md px-4  text-white bg-orange-700 hover:bg-orange-600 hover:border-orange-600"
            >
              All
            </button>
            <button
              onClick={() => FilteredCat("chicken")}
              className="m-1 border-2 border-orange-700 rounded-md px-4  text-white bg-orange-700 hover:bg-orange-600 hover:border-orange-600"
            >
              Chicken
            </button>
            <button
              onClick={() => FilteredCat("pizza")}
              className="m-1 border-2 border-orange-700 rounded-md px-4  text-white bg-orange-700 hover:bg-orange-600 hover:border-orange-600"
            >
              Pizza
            </button>
            <button
              onClick={() => FilteredCat("salad")}
              className="m-1 border-2 border-orange-700 rounded-md px-4  text-white bg-orange-700 hover:bg-orange-600 hover:border-orange-600"
            >
              Salad
            </button>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {food.map((item) => {
            const str = item.name;
            const words = str.split(" ");

            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0].toUpperCase() + words[i].slice(1) + " ";
            }
            // const result =
            //   str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

            return (
              <div
                key={item.id}
                className="flex flex-col duration-300 ease-out hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" object-cover rounded-md h-[200px] w-full"
                />

                <div className="flex justify-between px-2 py-1">
                  <p className="font-bold ">{words}</p>
                  <p className="bg-orange-500 border-8 h-18 w-18  px-3 text-white py-4  rounded-full  -mt-10">
                    {item.price}
                  </p>
                </div>
                <div className="flex -mt-1 text-indigo-600 ">
                  <p className="-mt-1.5 px-2">View More </p> <FaArrowRight />
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
