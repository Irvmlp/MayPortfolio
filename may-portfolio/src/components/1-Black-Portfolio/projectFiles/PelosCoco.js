import React from 'react';
import { ReactComponent as ArrowL } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowL.svg';
import { ReactComponent as ArrowR } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowR.svg';
import { ReactComponent as LLamaUserJourney } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/llamaUserJourney.svg';

import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisy1.png';
import Phone1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyphone1.png';
import Phone2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyphone2.png';
import Phone3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyphone3.png';
import Phone4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyphone4.png';
import Phone5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyphone5.png';
import Phone6 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyphone6.png';


import DaisyPersonas from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyPersonas.png';
import DaisyWordCloud from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/daisyWordCloud.png';
import DaisyJourneyMap from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/DaisyJourneyMap.png';


const PelosProject = () => {
    const scrollToTop = () => {
        console.log('Scroll to top button clicked');
        window.scrollTo(0, 0); // Remove smooth behavior for testing
      };

  return (
    <div className="h-full min-w-full font-inter">
      {/* 1. Story */}
      <section className='flex flex-col md:flex-row py-8 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-3/5 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='px-8 GtRegularBold text-pink-400'>Pelos Coco</h2>
        </div>
        <div className='flex h-18 items-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-16'>Responsible for UX Design, User Research, Branding, Usability Research</p>
        </div>
    </div>  
    <div className='flex w-full md:w-2/5 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold px-8 text-pink-400'>Freelance| 2023</h2>
        </div>
        <div className='flex h-18 items-center text-lg justify-end '>
            <p className='GtRegular text-black px-8 mt-2 md:px-16'> Figma | Adobe Creative Suite | G Suite </p>
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
     <section className='flex flex-col md:flex-row py-16 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='md:px-8 px-0 GtRegularBold text-pink-400'>Problem</h2>
        </div>
        <div className='flex h-24 md:mt-0 mt-8 items-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-12 md:px-16'> Understanding and managing reproductive health can be an overwhelming task for many women, mainly due to the lack of user-friendly, personalized, and accessible tools. The necessity to simplify this journey and bring knowledge, empowerment, and control to women's fingertips inspired the creation of Daisy. </p>
        </div>
    </div>  
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full md:py-0 py-8 flex-col'>
    <div className='px-8 flex md:mt-0 mt-8 justify-end text-4xl w-full'>
    <h2 className='px-8 GtRegularBold text-pink-400'>Solution</h2>
</div>
<div className='flex h-24 justify-end md:mt-0 mt-8 mb-8 items-center text-black text-lg'>
    <p className='GtRegular justify-end text-right flex flex-row px-8 mt-2 md:px-16 '> Our goal was to make reproductive health tracking not just effortless but engaging. It's more than a platform; it's a personal health companion that presents data in a relatable, intuitive, and secure manner. By translating complex health metrics into simple, actionable insights, Daisy nurtures an enriching bond between women and their health information, ultimately fostering reproductive freedom. </p>
</div>
    </div>  
</section>      
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 GtRegularBold text-pink-400'>User Research</h2>
    </div>   
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 GtRegularBold text-pink-400'>Word Cloud</h2>
    </div>   
    <div className='mt-0 items-center justify-center flex  w-full'>
        <div className='items-center w-full px-8 md:px-24 py-12'>
        <img src={DaisyWordCloud} loading='lazy' className="mr-4 mt-8 w-full h-auto" />
        </div>
     </div>
     <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 text-lg GtRegular md:text-2xl text-black'> The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.</h2>
    </div>  
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 GtRegularBold text-pink-400'>User Personas</h2>
    </div>   
    <div className='mt-0 items-center justify-center flex  w-full'>
        <div className='items-center w-full px-8 md:px-24 py-12'>
        <img src={DaisyPersonas} loading='lazy' className="mr-4 mt-8 w-full h-auto" />
        </div>
     </div>
     <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 text-lg GtRegular md:text-2xl text-black'> The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.</h2>
    </div>  
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 GtRegularBold text-pink-400'>User Journey Map</h2>
    </div>   
    <div className='mt-0 items-center justify-center flex  w-full'>
        <div className='items-center w-full px-8 md:px-24 py-12'>
        <img src={DaisyJourneyMap} loading='lazy' className="mr-4 mt-8 w-full h-auto" />
        </div>
     </div>
     <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 text-lg GtRegular md:text-2xl text-black'> The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.</h2>
    </div>  
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 GtRegularBold text-pink-400'>Final Screens</h2>
    </div>   
   
 <div className='w-full h-full flex justify-center flex-row py-8'>
        <img src={Phone1} loading='lazy' className="w-1/5 h-auto" />
         <img src={Phone2} loading='lazy' className="w-1/5 h-auto" />
         <img src={Phone3} loading='lazy' className="w-1/5 h-auto" />
        </div>
        <div className='w-full h-full flex justify-center flex-row py-8'>
        <img src={Phone4} loading='lazy' className="w-1/5 h-auto" />
         <img src={Phone5} loading='lazy' className="w-1/5 h-auto" />
         <img src={Phone6} loading='lazy' className="w-1/5 h-auto" />
        </div>
     <div className='px-8 flex text-4xl w-full'>  
            <h2 className='md:px-8 px-0 text-lg GtRegular md:text-2xl text-black'> The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.</h2>
    </div>  
</section>
      {/* 2. Product */}
      <section className='  flex items-center justify-center h-12'>
      </section>

      <section className='  flex items-center justify-center h-24 mb-12'>
      <button onClick={scrollToTop} className='bg-white py-4 px-8 shadow-md rounded-full'>
          Scroll to top
        </button>
      </section>

    </div>
  );
};

export default PelosProject;

