import React from 'react';
import BioInfo from './nameInfo'; 

const Name = () => {
  return (
    <div className='flex flex-col md:flex-row'>
    
      <div className="w-full md:w-2/3 flex justify-center md:ml-24 md:justify-start">
        <BioInfo/>
      </div>
      <div className="w-full md:w-1/3 flex mt-48 bottom-0">
        <div className='h-64 w-24 bg-blue-100'> 
        </div
>      </div>
    </div>
  );
};

export default Name;
