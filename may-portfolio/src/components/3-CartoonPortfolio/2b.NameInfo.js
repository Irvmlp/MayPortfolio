import React from 'react';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/3-CartoonPortfolio/cartoon.css';


const BioInfo = () => {
  return (
    <div className='flex h-full flex-col mt-48 ml-14 text-black'>
        
        <div>       
        <h3 className='GtRegular text-4xl md:text-2xl ml-2'> Hi, i'm </h3>
        <h3 className='text-5xl md:text-8xl Comical'> IRVING LAMADRID </h3>
        <h3 className='py-1 text-3xl md:text-5xl GtRegular'> I design and build solutions </h3>
          </div>

         <div className="py-4">
             <button className='font-bold text-md md:text-xl bg-white GtRegularBold px-10 py-3 rounded-xl mr-4 text-black'> Projects </button>
             <button className='font-bold text-md md:text-xl bg-transparent border-2 border-[white] GtRegularBold text-[white] px-10 py-3 rounded-xl'> Contact </button>
        </div>

    </div>
     
  );
};

export default BioInfo;
