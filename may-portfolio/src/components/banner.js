import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (

    <nav className="fixed top-15 left-0 w-full z-30 bg-[#F2EFF1] backdrop-filter lg py-4arent text-gray-500 font-inter">
      <div className="flex text-m md:text-xl items-center justify-between h-12 px-4">
      
        <div className="flex items-center">
          <Link to="/" className="ml-2 font-inter">Product Design Engineer</Link>

       
        </div>
        <div className=" md:flex-row flex font-inter ">
          <div className={'px-3 py-2'}>Stanford Alum</div>
          <div className={'px-3 py-2'}>Hello</div>
        </div>
      </div>
      <hr className='bottom-line2'></hr>
    </nav>

    
  );
};

export default Banner;
