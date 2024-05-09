import React from 'react';
import Stickies from '../2-LooseLeaf-Portfolio/StickyNotesCollection';


const BioInfo = () => {
  return (
    <div className='flex h-full flex-col mt-48 ml-14 '>
        
        <div>       
       
        <h3 className='text-5xl md:text-8xl GtRegularBold'> My Projects </h3>
          </div>

         <div className="py-2">
         <Stickies/>
    </div>
    </div>
     
  );
};

export default BioInfo;
