import React, { useState, useEffect } from 'react';
import MiddleSection from './middle-middleSection';

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
    <div className='h-screen md:h-4/5 mb-1 flex flex-col md:flex-row'> {/* second */}
      {!isScreenSmall && (
        <div className="w-full md:w-1/4 -mt-8 md:mt-0 bg-orange-400 custom-border-right">
        
        </div>
      )}

      <div className="w-full md:h-full h-3/5  md:w-1/2 custom-border-right">
        <MiddleSection />
      </div>

      <div className="w-full md:h-full h-4/5 md:w-1/2 bg-black"> {/* third */}
      </div>
    </div>
  );
};

export default SecondCol;
