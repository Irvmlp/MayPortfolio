import React from 'react';
import { ReactComponent as ArrowL } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowL.svg';
import { ReactComponent as ArrowR } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowR.svg';
import { ReactComponent as LLamaUserJourney } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/llamaUserJourney.svg';

import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/genie1.png';
import Mockup2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/genie2.png';




const JourneyProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter">

 {/* 1. Story */}    
  <section className='flex flex-col md:flex-row py-8 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-3/5 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='px-8 GtRegularBold text-yellow-500'>Startup: Journey Genie</h2>
        </div>
        <div className='flex h-18 items-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-16'>Responsible for the UI/UX of the platform in addition to front end maintence. </p>
        </div>
    </div>  
    <div className='flex w-full md:w-2/5 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold px-8 text-yellow-500'>Team-5 | Winter 2023</h2>
        </div>
        <div className='flex h-18 items-center text-lg justify-end '>
            <p className='GtRegular text-black px-8 mt-2 md:px-16'> React | Tailwind CSS | Html | UI / UX</p>
        </div>
    </div>
</section>
        {/* image of Mockup */}
     <section className='mt-12 border-2 rounded-xl border-white bg-white items-center justify-center flex min-h-[450px] w-full'>
        <div className='w-full h-full md:w-1/2 md:h-1/2'>
         <img src={Mockup1} loading='lazy' className="mr-4 mt-8 w-full h-auto" />
        </div>
     </section>
     {/* 1. Story */}
 {/* 1. Story */}
 <section className='flex flex-col md:flex-row py-8 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='px-8 GtRegularBold text-yellow-500'>The Story</h2>
        </div>
        <div className='flex h-24 items-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-16'>Both of my sisters our teachers. With my sisters idea and my experience in Product Design, I helped them with the UI/UX aspect. </p>
        </div>
    </div>  
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
    <div className='px-8 flex justify-end text-4xl w-full'>
    <h2 className='px-8 GtRegularBold text-yellow-500'>The Vision</h2>
</div>
<div className='flex h-24 justify-end items-center text-black text-lg'>
    <p className='GtRegular justify-end text-right flex flex-row px-8 mt-2 md:px-16'>Both of my sisters our teachers. With my sisters idea and my experience in Product Design, I helped them with the UI/UX aspect.</p>
</div>
    </div>  
</section>
        {/* image of Mockup */}
        <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-[#0542BA]'>The Product</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-1/2 h-1/2'>
         <img src={Mockup2} loading='lazy' className="mr-4 -mt-4 md:mt-8 w-full h-auto" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center px-8 mt-12 md:mt-0'>  
            <h2 className='text-lg GtRegular md:text-2xl text-black'>Our product was for teachers with teachers at the center of the design. Using my skills as a product designer and my teachers experience with lesson plans. </h2>
    </div>   
</section>
     {/* 1. Story */}










     <section className='mt-12 bg-red-500 border-b-2 border-stone-800 min-h-[450px] w-full'>
        
     </section>
     
      

    </div>
  );
};

export default JourneyProject;
