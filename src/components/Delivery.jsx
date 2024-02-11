import React from "react";

const Delivery = () => {
  return (
    <div>
      <div className="p-4 px-16 w-full m-auto  ">
        <h1 className="text-orange-600 text-xl font-bold text-center">
          Quick Delivery App
        </h1>
        <div className="delivery-content w-[1240px] flex  justify-center lg:flex-row md:flex-row flex-col mx-3 ">
          <img
            className="max-w-[50%] lg:max-w-[50%] lg:h-auto h-[250px]  rounded-md mt-4  "
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
            alt="Quick Delivery Image"
          />
          <div className="deliveryRight flex flex-col justify-center  ">
            <h2 className="text-cyan-400 font-bold mb-2">Get the App</h2>
            <h1 className="text-2xl font-bold mb-1">
              Limitless Convenience on-demand
            </h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam corrupti nisi delectus necessitatibus et dicta labore
              molestias impedit, nemo enim, asperiores rem aliquam eum eius
              aliquid explicabo dignissimos! Autem, illum.
            </p>
            <p className="font-semibold hidden lg:block ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam corrupti nisi delectus necessitatibus et dicta labore
              molestias impedit, nemo enim, asperiores rem aliquam eum eius
              aliquid explicabo dignissimos! Autem, illum.
            </p>
            <button className="bg-black text-cyan-400 py-3 rounded-md max-w-[200px] mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
