import React from 'react';

const BioInfo = () => {
  return (
    <div className='flex h-full flex-col mt-48 ml-14 '>
        
        <div>       
        <h3 className='GtRegular'> Hi, i'm </h3>
        <h3 className='text-sm md:text-8xl GtRegularBold'> Irving Lamadrid </h3>
        <h3 className='py-1 text-5xl GtRegular'> I design and build solutions </h3>
          </div>

         <div className="py-4">
             <button className='font-bold text-xl bg-[#FF9A00] GtRegularBold px-10 py-3 rounded-xl mr-4 text-white'> Resume </button>
             <button className='font-bold text-xl bg-transparent border-2 border-[#FF9A00] GtRegularBold text-[#FF9A00] px-10 py-3 rounded-xl'> Contact </button>
        </div>

    </div>
     
  );
};

export default BioInfo;
