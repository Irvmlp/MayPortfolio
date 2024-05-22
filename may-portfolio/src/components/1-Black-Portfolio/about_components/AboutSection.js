import React from 'react';
import Irving1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/picIrving.png';

const AboutPage = () => {
  return (
    <div className='flex flex-col md:flex-row'>
    
      <div className="w-full md:w-2/6 flex items-center bg-whitejustify-center  bottom-0">
        <div className='h-64 w-64 '> 
        <img src={Irving1} alt="Irving's Picture" className="ml-48 md:h-auto w-96" />

        </div>      </div>

      <div className="w-full md:w-4/6 flex justify-center md:ml-24 md:justify-start">
      <div className='flex h-full flex-col mt-48 ml-14 '>
        
        <div className='px-24'>       
        <h3 className='text-sm md:text-6xl GtRegularBold'> I am, </h3>
        <h3 className='py-1 text-3xl text-left GtRegular'> A natural builder. Engineer by heart, artist. A natural builder. Engineer by heart, artist. A natural builder. Engineer by heart, artist. A natural builder. Engineer by heart, artist. A natural builder. Engineer by heart, artist. A natural builder. Engineer by heart, artist.   </h3>
          </div>
          <img src={Irving1} alt="Irving's Picture" className="ml-48 md:h-auto w-96" />

    </div>
      </div>
      
      


    </div>

  );
};

export default AboutPage;
