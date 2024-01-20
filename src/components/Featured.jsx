import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDot } from "react-icons/go";

const Featured = () => {
  const slider = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentindex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentindex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentindex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentindex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentindex + 1;
    setCurrentIndex(newIndex);
  };
  const movetoSlide = (slideitem) => {
    setCurrentIndex(slideitem);
  };

  return (
    <div className="max-w-[1520px] px-4 py-2 relative w-full sm:h-[500px] md:h-[400px] h-[300px] group">
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center duration-500 object-cover relative :"
        style={{ backgroundImage: `url(${slider[currentindex].url})` }}
      >
        <div className=" hidden group-hover:block absolute top-[50%] ml-2 text-white p-1 -translate-x-0 translate-y-[-50%] text-2xl rounded-full bg-orange-700">
          <FaChevronLeft size={20} onClick={prevSlider} />
        </div>
        <div className="absolute flex justify-center top-[95%] bottom-0  text-white left-[50%] p-1 -translate-x-[50%] translate-y-[-50%] text-2xl ">
          {slider.map((slideritem, slideIndex) => (
            <GoDot
              size={20}
              key={slideIndex}
              onClick={() => movetoSlide(slideIndex)}
            />
          ))}
        </div>
        <div className="absolute top-[50%] hidden group-hover:block right-0 mr-2 text-white p-1 -translate-x-0 translate-y-[-50%] text-2xl rounded-full bg-orange-700">
          <FaChevronRight size={20} onClick={nextSlider} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
