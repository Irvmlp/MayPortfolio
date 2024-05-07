// Header.js
import React, { useState, useEffect } from 'react';
import Picture from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/Irving_Portfolio_rain2.png';
import Info from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-NewComponents/Info.js';
import { ReactComponent as MySVG2 } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/svg2.svg';


const Main = () => {
    const [isScreenSmall, setIsScreenSmall] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsScreenSmall(window.innerWidth < 768); // Adjust the threshold as needed
      }; 
  
      // Set initial screen size
      handleResize();
  
      // Add event listener to window resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // 

  return (
    <div className="h-max-content ">


     <div className='flex flex-col md:flex-row'>
     {!isScreenSmall && (
       <div className='w-full min-h-full  md:w-1/6 bg-[#F5F5F5] border-r-2 border-gray-900'>  <MySVG2 className="w-101% px-1 py-1 ml-1.5"/></div>
      )}

        <div className='w-full md:w-3/5 border-r-2 border-gray-900'>  
        <Info/>
        </div>

        <div className="flex justify-center items-center max-w-full md:h-full max-h-4/5 md:w-1/3 "> {/* third */}
      <img src={Picture} alt="Irving's Picture" className="md:h-auto h-96" />

      </div>

     </div>

    </div>
  );
};

export default Main;




