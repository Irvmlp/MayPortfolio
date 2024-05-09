import React, { useState, useEffect } from 'react';
import MiddleSection from './4-middle-middleSectionSlider';
/* import BulbLogo from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/Logo.png'; */
import IrvingPic from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/Irving_Portfolio_rain2.png';
import { ReactComponent as MySVG } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/svg1.svg';
import { ReactComponent as MySVG2 } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/svg2.svg';


const SecondCol = () => {
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
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <div className='h-full md:h-full mb-1 flex flex-col md:flex-row'> {/* second */}
     
      {!isScreenSmall && (
       <div className="w-full md:w-1/6 -mt-8 md:mt-0 bg-white custom-border-right">
        <MySVG2 className="w-101% mt-4 ml-1.5"/>
       </div>
      )}


      <div className="w-full md:h-full h-3/5  md:w-1/2 custom-border-right">
        <MiddleSection />
      </div>

 
      <div className="flex justify-center items-center max-w-full md:h-full max-h-4/5 md:w-1/3 "> {/* third */}
      <img src={IrvingPic} alt="Irving's Picture" className="md:h-auto h-96" />

      </div>
 

    </div>
  );
};

export default SecondCol;
