import React, { useState, useEffect } from 'react';
import MiddleSection from './4-middle-middleSectionPortfolio';

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
    <div className='h-screen md:h-full mb-1 flex flex-col md:flex-row'> {/* second */}
  

      <div className="w-full md:h-full h-3/5  md:w-full custom-border-right">
        <MiddleSection />
      </div>


    </div>
  );
};

export default SecondCol;
