import React from 'react';
import Typed from "react-typed";

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        {/* We will set 3 sizes for Page responsiveness */}
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            Fast, flexible financing for
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'            
            strings={["BTB" , "BTC" , "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            
            
            />
          </p>
        </div>
        <p className=' mt-3 md:text-2xl text-xl font-bold text-gray-500 md:pl-4 pl-2'>Monitor your data analytics to increase revenue for BTB,BTC, &SASS platforms,</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a] hover:opacity-75'>Get Started</button>

      </div>
    </div>
  );
}

export default Hero;
