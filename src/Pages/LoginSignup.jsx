import React from 'react'


function LoginSignup() {
  return (
    <div className='loginsignup bg-[#fce3fe] lg:h-[80vh] h-[60vh] w-[100%] justify-center flex '>
      <div className='bg-white lg:w-[580px] h-[550px]   mt-10'>
        <h1 className='text-2xl font-bold m-4'>Sign Up</h1>
        <div className='flex flex-col m-4'>
          <input type='text' placeholder='Your Name' className='h-[100%] w-[100%] border-2 border-gray-300 p-3 m-2 mt-2'/>
          <input type='email' placeholder='Email Address' className='h-[100%] w-[100%] border-2 border-gray-300 p-3 m-2 mt-4'/>
          <input type='text' placeholder='Password' className='h-[100%] w-[100%] mt-4 border-2 border-gray-300 p-3 m-2'/>
        </div>
        <div className='m-3 p-1'>
          <button className='bg-red-500 text-white w-[100%] p-3 '>Continue</button>
        </div>
       
          <p className='mx-4'>Already have an account ? <span className='text-red-500 font-semibold'>Login here</span></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id='' className='mx-4'/>
            <p className='mx-4'>By continuing i agree to the terms of use & privacy policy</p>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup