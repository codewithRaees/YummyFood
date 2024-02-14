import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="bg-black/75 flex justify-content-around    h-52 m-auto max-w-[1520px] px-3 mx-1">
        <div className="text-white pt-3 ">
          <p>Need advice on how to improve your flow?</p>
          <p>Sign Up to join our newsletter and stay up to date.</p>
        </div>
        <div>
          <input type="email" placeholder="email" ></input>
          <button className="bg-primary ">Notify me</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
