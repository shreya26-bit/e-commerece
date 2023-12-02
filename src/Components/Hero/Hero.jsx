import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
import p1_product_i1 from "../Assets/p1_product_i1.png";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero flex justify-between">
        <div className="left-content lg:m-40 mx-10 mt-20">
          <p className="text-2xl font-semibold">NEW ARRIVALS ONLY</p>
          <div className="">
            <div className="flex">
              <p className="text-[70px] font-bold">new</p>
              <img
                src={hand_icon}
                style={{ width: "100px", height: "100px" }}
                className="mx-4"
              />
            </div>
            <p className="text-[60px] font-bold">collections</p>
            <p className="text-[60px] font-bold">for everyone</p>
            <button className="btn text-pink-500 lg:w-[80%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-pink-600 font-bold lg:m-4 m-1 p-2.5 border-1 w-[50%] border-pink-500 mt-4">
              Latest Collection
            </button>
          </div>
        </div>
        <div className="right-content hidden md:block">
          <img src={hero_image} />
        </div>
      </div>
      
    </>
  );
}

export default Hero;
