import React from "react";
import img from "../asset/image2.png";
import MiddleComp from "./MiddleComp";

const TopBanner = () => {
  return (
    <div>
      <div className="bg-[#EAFFFC] md:h-96 mt-8 w-[100%] max-w-screen-xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4">
        <div className="p-2 ml-5 ">
          <p className="text-2xl md:text-3xl  font-semibold   p-4">
            Find your dream job with us easily
          </p>
          <p className="p-4 text-sm font-semibold text-gray-500 md:text-sm w-full md:w-[80%]leading-relaxed">
            Explore personalized career resources and tools tailored just for
            you. Let's take your professional journey to the next level!
          </p>
          <button className="bg-[#086F5F] text-white px-6 py-2 font-semibold rounded-md text-center m-4">
            Jobs for you{" "}
          </button>
        </div>

        <div className="flex justify-center items-center rounded-full bg-[#7e9f9a] bg-opacity-10 p-5">
          <img
            src={img}
            alt="User avatar"
            className="rounded-full w-40 h-40 md:w-56 md:h-56"
          />
        </div>
      </div>

      <div>
        <MiddleComp />
      </div>
    </div>
  );
};

export default TopBanner;
