import React, { Suspense, lazy } from 'react';
import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisy1.png';
import Phone1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisyphone1.png';
import Phone2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisyphone2.png';
import Phone3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisyphone3.png';
import Phone4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisyphone4.png';
import Phone5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisyphone5.png';
import Phone6 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/6.daisy_pics/daisyphone6.png';

import Loader from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/loader.js'; // Adjust the path as necessary

const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/DaisySvgs/ProgressDarkLazy.js'));
const LazyProgressLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/DaisySvgs/ProgressDarkLight.js'));
const LazyDaisyWordCloudLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/DaisySvgs/WorkCloudLight.js'));
const LazyDaisyWordCloudDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/DaisySvgs/WorkCloudDark.js'));
const LazyDaisyUsersLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/DaisySvgs/UsersLightLazy.js'));
const LazyDaisyUsersDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/DaisySvgs/UsersDarkLazy.js'));
const LazyDaisyJourneyMapLight = lazy(() => import('../Rsvgs/DaisySvgs/JourneyMapDarkLazy.js'));
const LazyDaisyJourneyMapDark = lazy(() => import('../Rsvgs/DaisySvgs/JourneyMapLightLazy.js'));



const PelosProject = () => {
  return (
    <div className="h-full min-w-full font-inter">
      <Suspense fallback={<Loader/>}>
        <div className='w-full h-8 dark:flex hidden'>
          <LazyProgressDark />
        </div>
        <div className='w-full h-8 dark:hidden flex'>
          <LazyProgressLight />
        </div>

        {/* ---------------------------_STORY-------------------------------------- */}
        
        <section className='flex text-black dark:text-white flex-col sm:flex-row py-8 mt-0 bg-transparent rounded-xl border-2 dark:border-white border-black h-full w-full mx-auto'>
          {/* Container for text content */}
          <div className='flex flex-col w-full sm:w-3/5 h-full items-start justify-start sm:ml-4 '>
            {/* Title container */}
            <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
              <h2 className='GtRegularBold text-black dark:text-white '>Daisy</h2>
            </div>
            {/* Description container */}
            <div className='px-4 lg:mt-4 flex justify-center sm:justify-start items-center text-lg sm:text-xl w-full'>
              <p className='GtRegular text-center sm:text-left'>
                Responsible for the needfinding, UX design, user research, and brand design

Usability Researcher
              </p>
            </div>
          </div>
          <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-2/5 h-full items-start justify-start sm:mr-4'>
            {/* Title container */}
            <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
              <h2 className='GtRegularBold text-black dark:text-white '>Team 5  | 2023</h2>
            </div>
            {/* Description container */}
            <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
              <p className='GtRegular text-center sm:text-right'>Figma, Adobe Creative Suite, G Suite, Canva</p>
            </div>
          </div>
        </section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='mt-4  border-2 rounded-xl dark:border-white border-black items-center justify-center flex  w-full'>
        <div className='px-4 sm:px-6 md:px-10 w-full lg:w-5/6 h-auto'>
         <img src={Mockup1} loading='lazy' className="mr-4 mt-8 w-full h-auto" />         </div>     
          </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
   
<section className='flex flex-col sm:flex-row py-8 mt-4  dark:border-white border-black rounded-xl border-2 h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-1/2 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Problem</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white '>
            Understanding and managing reproductive health can be an overwhelming task for many women, mainly due to 
            the lack of user-friendly, personalized, and accessible tools. The necessity to simplify this journey and 
            bring knowledge, empowerment, and control to women's fingertips inspired the creation of Daisy.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/2 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Solution</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white '>Our goal was to make reproductive 
            health tracking not just effortless but engaging. It's more than a platform; it's a personal health companion that 
            presents data in a relatable, intuitive, and secure manner. By translating complex health metrics into simple, 
            actionable insights, Daisy nurtures an enriching bond between women and their health information, ultimately fostering 
            reproductive freedom</p>
        </div>    </div>   </section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
          {/* Container for text content */}
          <div className='flex flex-col w-full h-full items-center justify-center sm:ml-4'>
            {/* Title container */}
            <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
              <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>Word Cloud</h2>
            </div>
            {/* Description container */}
        
            <div className='items-center  w-full justify-center px-4 lg:px-12'>
            <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <LazyDaisyWordCloudDark className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <LazyDaisyWordCloudLight className="" />
               </Suspense>
             </div>            </div>  </div>        </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full  items-center justify-center sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>User Personas</h2>
          
        </div>
        
        <div className='items-center  w-full justify-center px-4 sm:px-16 mt-4'>
            <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <LazyDaisyUsersDark className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <LazyDaisyUsersLight className="" />
               </Suspense>
             </div>            </div> 
          
                </div>
 </section>
  {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
  <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
          {/* Container for text content */}
          <div className='flex flex-col w-full h-full items-center justify-center sm:ml-4'>
            {/* Title container */}
            <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>User Journey Map</h2>
        </div>
            {/* Description container */}
        
            <div className='items-center  w-full justify-center px-4 lg:px-12'>
            <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <LazyDaisyJourneyMapLight className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <LazyDaisyJourneyMapDark className="" />
               </Suspense>
             </div>            </div>  </div>        </section>
      {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Final Screens</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className='w-full h-full flex justify-center flex-row py-8'>
        <img src={Phone1} loading='lazy' className="w-1/3  h-auto" />
         <img src={Phone2} loading='lazy' className="w-1/3  h-auto" />
         <img src={Phone3} loading='lazy' className="w-1/3  h-auto" />
        </div>

        <div className='w-full h-full flex justify-center flex-row'>
        <img src={Phone4} loading='lazy' className="w-1/3  h-auto" />
         <img src={Phone5} loading='lazy' className="w-1/3  h-auto" />
         <img src={Phone6} loading='lazy' className="w-1/3 h-auto" />
        </div>
            <p className='GtRegular mt-4 sm:mt-8 text-center text-xl sm:text-xl md:text-2xl sm:text-left text-black dark:text-white'>
            Intuitive, clean, and brand aligned UI/UX for their food app.
            </p>        </div>    </div>
    </section>
  
      {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 bg-transparent rounded-xl border-2  border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>The App</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-600'></h2>
        </div>
        {/* Description container */}
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl md:text-2xl  w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>Once we gathered all of the necessary insights
             from our interviews, I moved on to design the final screens in Figma. My goal was to create a visual identity that’s aligned 
             with the brand’s vision, which was to revolutionize women's healthcare agency, creating a transparent, unbiased platform that 
             provides crucial reproductive health data in a user-friendly format. I made light, warm, and soft visual style choices to 
             create an inviting sense of delight each time the app is used because it was intended to be used daily.</p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Reflection</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-600'></h2>
        </div>
        {/* Description container */}
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl md:text-2xl  w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>Looking back, the process was both rewarding 
            and enlightening, bridging gaps between gender, understanding, and health empowerment. The joy of overcoming these challenges 
            and delivering a product that not only meets its functional aims but also resonates visually has been an exciting part of my 
            journey as a designer. Daisy stands as a testament to the power of empathy in design and the potential of aesthetics to enhance 
            user interaction and experience. </p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}      



      </Suspense>
    </div>
  );
};

export default PelosProject;
