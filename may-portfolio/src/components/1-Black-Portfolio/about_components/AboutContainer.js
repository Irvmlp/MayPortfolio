import React from 'react';
import IrvingLight from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/about_components/picIrvingLight.png';
import IrvingDark from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/about_components/picIrvingDark.png';

const Name = () => {
  return (
    <div className='flex flex-col items-center'>

      <div className="w-full flex justify-center align-center items-center px-4 md:justify-start">

        <div className='flex h-full w-full sm:flex-row flex-col text-black dark:text-white'>

          {/* Image first by default */}
          <div className='w-full sm:w-3/5 py-0 sm:py-20 px-0 sm:px-16 md:py-44 order-2  sm:order-1'>
            <h3 className='text-5xl md:text-6xl lg:text-7xl sm:text-left text-center  GtRegularBold'>Product Designer </h3>
            <h3 className='py-1 text-3xl  sm:text-left text-center md:text-4xl lg:text-5xl GtRegular'>Product of Stanford's D.School</h3>
          </div>

          {/* Text second by default */}
          <div className='w-full sm:w-2/5 flex md:px-4 mt-12 justify-center align-center items-center order-1 sm:order-2'> {/* Using justify-end to push the content to the right */}
            <div className='w-full md:w-full h-auto'>
               <img src={IrvingLight} alt="Irving's Picture" className="w-full h-auto dark:hidden" />
               <img src={IrvingDark} alt="Irving's Picture" className="w-full h-auto hidden dark:flex" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Name;


/* <div className='flex items-center justify-center text-black w-full py-4 md:py-32 px-12 sm:px-24 sm:w-1/3 order-1 md:order-2'>
          <img src={IrvingLight} className='h-48 sm:h-72 md:mb-12 w-auto  dark:hidden'/>
         <img src={IrvingDark} className='h-48 sm:h-72 md:mb-12 w-auto absolute hidden dark:flex'/>
          </div> */