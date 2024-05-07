// Footer.js
import React from 'react';

const NameFooter = () => {
  return (
    <div>
     
      <footer className="bg-white bottom-0 min-w-full h-96 md:w-max  text-gray-900 flex flex-row">
      
             <div className="w-1/4  bg-slate-200">
             <div>       
        <h3 className='GtRegular text-2xl ml-2'> Hi, i'm </h3>
        <h3 className='text-sm md:text-8xl GtRegularBold'> Irving Lamadrid </h3>
        <h3 className='py-1 text-5xl GtRegular'> I design and build solutions </h3>
          </div>
            </div>
            <div className="w-1/2  bg-slate-100">
           
            </div>
            <div className="w-1/4  bg-slate-200">
            <div>       
        <h3 className='GtRegular text-sm ml-2'> Hi, i'm </h3>
        <h3 className='text-sm md:text-8xl GtRegularBold'> Irving Lamadrid </h3>
       
          </div>
            </div>

    
        
      </footer>
    </div>
  );
};

export default NameFooter;
