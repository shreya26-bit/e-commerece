import React from 'react'
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png"

function Offers() {
  return (
   <div className=' m-4 lg:p-40 mt-20'>
    {/* <div className='container offers  '>
     <h1 className=''>Exclusive</h1>
     <p className=''>offers For You</p>
     <p className=''>ONLY ON BEST SELLERS PRODUCTS</p>
     <button className=" ">Check know</button> */}
    {/* </div> */}
    <div className="hero flex justify-between">
        <div className="left-content lg:m-40 mx-10 mt-20">
         
          <div className="">
            <div className="flex">
              <p className="text-[63px] font-semibold">Exclusive</p>
              {/* <img
                src={hand_icon}
                style={{ width: "100px", height: "100px" }}
                className="mx-4"
              /> */}
            </div>
            <p className="text-[60px] font-semibold">offers For You</p>
            <p className="text-[18px] font-semibold mt-2">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="btn text-white lg:w-[80%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-red-600 font-bold lg:m-4 m-1 p-2.5 border-1 w-[50%] border-pink-500 mt-4 bg-red-600">
              Latest Collection
            </button>
          </div>
        </div>
        <div className="right-content hidden md:block">
          <img src={exclusive_image} />
        </div>
      </div>
    </div>
  )
}

export default Offers