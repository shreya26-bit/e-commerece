import React, { useState } from 'react'
import logo from "../Assets/logo.png"
import Badge from "@mui/material/Badge";


function Navbar() {
  const [menu,setmenu]=useState("Men"); 
  return (
    <>
    <div className=' flex justify-between mt-6'>
     <div className='logo mx-10 '>
      <div className=' logo-content flex'>
       <img src={logo}  />
       <p className='text-black mt-4 text-3xl font-bold mx-2'>SHOPPER</p>
      </div>
     </div>
     {/* <div className=''> */}
      <ul className='flex  mx-2 mt-10 '>
        <li className='mx-4 font-semibold hover:cursor-pointer' onClick={()=>{setmenu("Shop")} }>Shop{menu==="Shop"?<hr  className=' bg-red-600 font-bold h-0.5'/>:<></>}</li>
        <li className='mx-4 font-semibold hover:cursor-pointer' onClick={()=>{setmenu("Men")}}>Men{menu==="Men"?<hr className='bg-red-600 font-bold h-0.5'/>:<></>}</li>
        <li className='mx-4 font-semibold hover:cursor-pointer' onClick={()=>{setmenu("Women")}}>Women{menu==="Women"?<hr className='bg-red-600 font-bold h-0.5'/>:<></>}</li>
        <li className='mx-4 font-semibold hover:cursor-pointer' onClick={()=>{setmenu("Kids")}}>Kids{menu==="Kids"?<hr className='bg-red-600 font-bold h-0.5'/>:<></>}</li>
      </ul>
     {/* </div> */}
     <div className='cart  mt-4 mx-6'>
      <button className='mx-4 bg-gray-300 rounded-full p-2 '>Login</button>
      <button className='mx-4 bg-gray-300 rounded-full p-2 '>Login</button>
      {/* <div className=''>
      <Badge  color="primary">
         
              <i
                class="fa-solid fa-cart-shopping text-light"
                style={{ fontSize: "23px", cursor: "pointer" }}
              ></i>
           
          </Badge>
      </div> */}
     </div>
  
    </div>
    <div class="h-[1.5px] bg-gray-200 mt-6"></div>

 
    </>
  )
}

export default Navbar