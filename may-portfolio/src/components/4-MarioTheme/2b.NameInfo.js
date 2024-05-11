import React from 'react';
import { ReactComponent as Name } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/name_marioBros.svg';

const BioInfo = () => {
  return (
    <div className='flex h-full flex-col mt-48 ml-14 text-black'>
        
        <div>       
        <h3 className='SuperFont mb-4  text-white text-4xl md:text-4xl ml-2'> Hi i'm </h3>
        <Name />
        <h3 className='py-1 text-3xl mt-4 md:text-6xl SuperFont text-white'> i DESIGN AND BUILD PRODUCTS </h3>
          </div>

         <div className="py-4">
             <button className='font-bold text-md md:text-xl bg-[#FBD000] GtRegularBold px-10 py-3 rounded-xl mr-4 text-white'> Projects </button>
             <button className='font-bold text-md md:text-xl bg-transparent border-2 border-[#FBD000] GtRegularBold text-[#FBD000] px-10 py-3 rounded-xl'> Contact </button>
        </div>

    </div>
     
  );
};

export default BioInfo;
