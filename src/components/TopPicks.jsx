import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topPicks } from "../assets/data";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <div className="p-4 hidden lg:block px-16 w-full m-auto max-w-[90%] ">
      <h1 className="text-orange-600 text-3xl font-bold text-center mb-4">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w[1520px]  m-auto py-2 px-2 ">
        <Splide
          options={{
            perPage: 5,
            type: "loop",
            gap: "0.5rem",
          }}
        >
          {topPicks.map((pickitem) => {
            const str = pickitem.title;
            const result = str.charAt(0).toUpperCase() + str.slice(1);

            return (
              <SplideSlide key={pickitem.id}>
                <div className="rounded-3xl relative hover:scale-105 ease-out duration-300 ">
                  <div className="absolute  text-white w-full h-full bg-black/50 rounded-3xl">
                    <p className=" px-3 pt-3 text-xl font-bold">{result}</p>
                    <p className=" px-3 ">{pickitem.price}</p>
                    <button className=" border-dotted border text-white border-white rounded-3xl mx-2 px-4 py-2 absolute bottom-4">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] object-cover w-full cursor-pointer rounded-3xl "
                    src={pickitem.img}
                    alt={pickitem.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
