import React from 'react';

const Banner = () => {
  return (
    <nav className="fixed top-15 w-full z-100 bg-transparent backdrop-filter lg py-parent text-black font-inter">
      <div className="text-m md:text-xl items-center justify-center px-4"> {/* Adjusted justify-center */}
        <div className="flex items-center">
         {/*  <Link to="/" className="ml-2 font-inter">Product Design Engineer</Link> */}
        </div>
        <div className="md:flex-row flex items-center font-inter justify-center ml-4"> {/* Adjusted justify-end */}
          <button className="slider__navigation__button" data-slide-index="0">
            About Me
          </button>
          <button className="slider__navigation__button" data-slide-index="1">
            Home Page
          </button>
          <button className="slider__navigation__button" data-slide-index="2">
            My Work
          </button>  
          <button className="">
            My Work
          </button>   
        </div>
      </div>
    </nav>
  );
};

export default Banner;
