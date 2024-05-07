// Header.js
import React, { useState, useEffect } from 'react';

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
       <div className='w-full min-h-full  md:w-1/6 bg-[#F5F5F5] border-r-2 border-gray-900'>  </div>
      )}

        <div className='w-full md:w-3/5 border-r-2 border-gray-900'>  
        hello 
        </div>

        <div className="flex justify-center items-center max-w-full md:h-full max-h-4/5 md:w-1/3 "> {/* third */}
      adsa
      </div>

     </div>

    </div>
  );
};

export default Main;




