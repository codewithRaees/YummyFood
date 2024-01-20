import React, { useState } from "react";

const SliderTest = () => {
  const Sliderr = [
    {
      name: "Rais",
    },
    {
      name: "Muhammad",
    },
    {
      name: "Ahmad",
    },
  ];
  const [slider, setSlider] = useState(1);
  const PrevSlide = () => {
    const isFirstSlide = slider === 0;
    const newIndex = isFirstSlide ? Sliderr.length - 1 : slider - 1;
    setSlider(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = slider === Sliderr.length - 1;
    const newIndex = isLastSlide ? 0 : slider + 1;
    setSlider(newIndex);
  };

  return (
    <div className="max-w-[1520px] flex justify-between px-9">
      <button onClick={PrevSlide}>Left</button>
      <h1 className="text-3xl font-bold text-green-600">
        {Sliderr[slider].name}
      </h1>
      <button onClick={nextSlide}>Right</button>
    </div>
  );
};

export default SliderTest;
