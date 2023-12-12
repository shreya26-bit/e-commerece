import React from 'react';
import instagram_icons from "../Assets/instagram_icon.png"
import pintester_icons from "../Assets/pintester_icon.png"
import whatsapp_icons from "../Assets/whatsapp_icon.png"
import footer_logo from "../Assets/logo_big.png"



function Footer() {
  return (
   <>
    <div className='footer mt-20 '>
     <div className='flex justify-center '>
      <img src={footer_logo}/>
      <p className='mt-10 font-bold text-2xl mx-2'>SHOPPER</p>
     </div>
     <ul className='flex justify-center m-4 font-semibold'>
      <li className='mx-3'>Company</li>
      <li className='mx-3'>Products</li>
      <li className='mx-3'>Offices</li>
      <li className='mx-3'>About</li>
      <li className='mx-3'>Contact</li>
     </ul>

     <div className='footer-social-icons flex justify-center mt-10 m-4'>
      <div className='footer-icons-container mx-3'>
       <img src={instagram_icons}/>
      </div>

      <div className='footer-icons-container mx-3'>
       <img src={pintester_icons}/>
      </div>

      <div className='footer-icons-container mx-3'>
       <img src={whatsapp_icons}/>
      </div>
     </div>
     <div className='flex justify-center'>
     <div className='line h-0.5 text-black w-[90%] flex justify-center bg-gray-200' 
></div>
     </div>

<div className='footer-end justify-center flex m-6'>
    <p className=''>copyright @ 2023 -All Right Reserved</p>
   </div>
    </div>
  
</>
  )
}

export default Footer