import React from 'react';
import BioInfo from './nameInfo'; 

const Name = () => {
  return (
    <div className='flex h-96 flex-col md:flex-row'>
     

          <div className="w-1/2 ml-24">
            <BioInfo/>
         </div>

         <div className="w-1/2">
             <h3 className='mt-48'>  </h3>
         </div>

    </div>
     
  );
};

export default Name;
