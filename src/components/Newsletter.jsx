import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="bg-[#24262b] text-white       max-w-[1520px] px-4 m-auto">
        <div className=" mx-auto grid lg:grid-cols-3">
          <div className=" lg:col-span-2 my-4 ">
            <h1>Need advice on how to improve your flow?</h1>
            <p>Sign Up to join our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex  flex-col sm:flex-row items-center justify-between w-full">
              <input
                type="email "
                placeholder="email"
                className="p-3 flex w-full rounded-md text-black"
              />
              <button class="bg-[#00df9a] py-3 text-white rounded-md w-[200px] font-medium ml-4 my-6 px-6 border-none ">
                Notify me
              </button>
            </div>
            <p>
              We are concerned about the security of your data, Read{""}{" "}
              <span className="text-[#00df9a]">Privacy Policy</span> .
            </p>
          </div>

          <hr className=" my-8 bg-gray-700 border-1 gark:bg-gray-700"></hr>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
