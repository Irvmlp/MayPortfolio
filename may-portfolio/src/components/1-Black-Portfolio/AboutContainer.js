import React from 'react';
import Irving1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/picIrving.png';

const Name = () => {
  return (
    <div className='flex  flex-col'>
    
      <div className="w-full  flex justify-center md:justify-start">

      <div className='flex h-full w-full md:flex-row flex-col mt-64  text-white'>
       
        <div className='w-full md:w-4/6'>       
        <h3 className='text-5xl md:text-7xl  md:text-left text-center md:ml-40 GtRegularBold'>Product Designer </h3>
        <h3 className='py-1 text-3xl md:ml-40 md:text-left text-center md:text-5xl GtRegular'>Product of Stanford's D.School</h3>
       </div>
        
       <div className='md:w-2/6 w-full mt-24 md:mt-0 flex justify-center md:justify-start'> {/* Using justify-end to push the content to the right */}
  <img src={Irving1} alt="Irving's Picture" className="h-96" />
</div>



       </div>
      
      </div>
    </div>
  );
};

export default Name;
