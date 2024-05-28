import React, { Suspense, lazy } from 'react';

import Loader from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/loader.js'; // Adjust the path as necessary

import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/2.finturo_pics/Finturo1.png';
import Mockup2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/2.finturo_pics/Finturo1a.png';
import Mockup3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/2.finturo_pics/Finturo2.png';
import Mockup4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/2.finturo_pics/Finturo3.png';
import InvestorGov from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/2.finturo_pics/investorgov.png';

const Testing1 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/Testing1.js'));
const Testing2 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/Testing2.js'));
const Testing3 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/Testing3.js'));

const FinturoUserFlow1 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/UserFlow1Lazy.js'));
const FinturoUserFlow2 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/UserFlow2Lazy.js'));

const CalculatorDesign1 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/CalculatorDesign1.js'));
const CalculatorDesign2 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/CalculatorDesign2.js'));
const CalculatorDesign3 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/CalculatorDesign3.js'));
const CalculatorDesign4 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/CalculatorDesign4.js'));
const CalculatorDesign5 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/CalculatorDesign5.js'));
const CalculatorDesign6 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/CalculatorDesign6.js'));

const Progress1 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/Progress1.js'));
const Progress2 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/Progress1.js'));
const Progress3 = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/Progress1.js'));

const FinturoJourneyMapLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/JourneyMapDarkLazy.js'));
const FinturoJourneyMapDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/JourneyMapLightLazy.js'));
const User1Dark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/1UserDark.js'));
const User1Light = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/1UserLight.js'));
const User2Dark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/2UserDark.js'));
const User2Light = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/2UserLight.js'));
const User3Dark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/3UserDark.js'));
const User3Light = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/3UserLight.js'));
const User4Light = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/4UserDark.js'));
const User4Dark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/4UserLight.js'));
const DesignPlanDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/PlanDarkLazy.js'));
const DesignPlanLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/PlanLightLazy.js'));
const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/ProgressDarkLazy.js'));
const LazyProgressLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/FinturoSvgs/ProgressLightLazy.js'));


const FinturoProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter">

<Suspense fallback={<Loader/>}>
        <div className='w-full h-8 dark:flex hidden'>
          <LazyProgressDark />
        </div>
        <div className='w-full h-8 dark:hidden flex'>
          <LazyProgressLight />
        </div>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-4/5 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Startup: Finturo</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-start items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white '>
            Led UI/UX design and development. Collaborated on feature conceptualization and implementation. Conducted acceptance and A/B testing.
            Leveraged prior design experience. Managed front-end maintenance. Oversaw version control and collaboration.
            Reflected for continuous improvement.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/5 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Team 3| 2023</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white'>Html, CSS, Javascript, JS Libraries, Github</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
<section className='mt-4 border-2 rounded-xl border-2 border-black dark:border-white items-center justify-center flex min-h-[450px] w-full'>
        <div className='w-full h-full flex justify-center items-center flex-col sm:px-12 sm:flex-row py-8'>
         <img src={Mockup1} loading='lazy' className="md:w-1/4 sm:w-1/2 w-2/3 h-auto" />
         <img src={Mockup2} loading='lazy' className="md:w-1/4 sm:w-1/2 w-2/3 h-auto" />
        </div>
     </section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
<section className='flex flex-col sm:flex-row py-8 mt-4  rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-3/5 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Our Story</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>
            Finturo was born from our passion for finance and helping our community embark on their investment journeys. 
            Co-founder Vlad and I leveraged our expertise to create a platform aimed at democratizing investment opportunities for a wider audience.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-2/5 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>The Outcome</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white'>We successfully expanded our user 
            base from 12 individuals to 58, significantly increasing our reach across Arizona and California. </p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>The plan</h2>
        </div>
        {/* Description container */}
        <div className='px-2 sm:px-6 md:px-16 lg:px-24 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
        <div className='items-center  w-full justify-center h-auto mt-4'>
            <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <DesignPlanDark className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <DesignPlanLight className="" />
               </Suspense>
             </div>            </div> 
            
            
            <p className='GtRegular mt-4 text-center text-xl sm:text-xl md:text-2xl sm:text-left text-black dark:text-white'>
            The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.
            </p>        </div>   
            
            
             </div>
    </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
 
 <section className='flex flex-col sm:flex-row py-8 mt-4 brounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>User Journey Map</h2>
        </div>
        <div className='px-2 sm:px-6 md:px-16 lg:px-24 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
        <div className=' mt-2 w-full lg:px-12 gap-4 flex flex-row h-auto'>     
        <div className='w-full h-auto dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <User1Dark className="" />
                </Suspense>
            </div>
            
            <div className='w-full h-auto dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <User1Light className="" />
               </Suspense>
             </div>     
        <div className='w-full h-auto dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <User2Dark className="" />
                </Suspense>
            </div>
            <div className='w-full h-auto dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <User2Light className="" />
               </Suspense>
             </div>      
        </div>

        <div className='w-full mt-2 gap-4 lg:px-12 flex flex-row h-auto'>
        <div className='w-full h-auto dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <User3Dark className="" />
                </Suspense>
            </div>
            <div className='w-full h-auto dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <User3Light className="" />
               </Suspense>
             </div>     
             
        <div className='w-full h-auto dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <User4Dark className="" />
                </Suspense>
            </div>
            <div className='w-full h-auto dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <User4Light className="" />
               </Suspense>
             </div>      
        </div>
        </div>  
            
        </div>
    </section>
 
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 brounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>User Journey Map</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className='items-center w-full sm:px-12 mt-4 '>
        <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <FinturoJourneyMapLight className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <FinturoJourneyMapDark className="" />
               </Suspense>
             </div>     
        </div>
            <p className='GtRegular mt-4 sm:mt-8 text-center text-xl sm:text-xl md:text-2xl sm:text-left text-black dark:text-white'>
            The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.
            </p>        </div>    
            
        </div>
    </section>
  {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
  <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>3 Crucial Pages</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className='w-full h-full flex justify-center flex-row py-8'>
        <img src={Mockup1} loading='lazy' className="w-1/3  h-auto" />
         <img src={Mockup4} loading='lazy' className="w-1/3  h-auto" />
         <img src={Mockup3} loading='lazy' className="w-1/3  h-auto" />
         </div> 
            <p className='GtRegular mt-4 sm:mt-8 text-center text-xl sm:text-xl md:text-2xl sm:text-left text-black dark:text-white'>
            The people we were helping already trust us. So we wanted to combine
            the MVP of what we help people do.
            </p>        </div>    </div>
    </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-4 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        
        <div className='px-4 flex justify-between items-center flex-col sm:flex-row text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <div className='w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>
                <h2 className='GtRegularBold'>The Dashboard</h2>
            </div>
            <div className='w-2/3 sm:w-1/3 md:w-1/4 mt-2 sm:mt-0 text-center sm:text-right text-gray-800 dark:text-gray-300'>
            <Suspense fallback={<Loader/>}>
                 <Progress1 className="" />
                </Suspense>
            </div>
        </div> 
        {/* Description container */}
         </div>
 </section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
<section className='flex flex-col py-8 border-2 rounded-xl border-2 border-black dark:border-white mt-4 rounded-xl h-full w-full mx-auto'>
    <div className='px-8 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
        <h2 className='GtRegularBold w-full sm:w-full text-center sm:text-left text-black dark:text-white'>Acceptance Testing</h2>
        <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'>Task: "Evaluate the dashboard"</h2>
    </div>

    <div className='flex flex-col md:flex-row py-8 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Project Overview</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                The dashboard is a key component of Finturo, providing users with comprehensive insights into their investments. Our goal was to validate that the dashboard is intuitive, user-friendly, and effectively presents financial information to meet both user needs and business goals.
            </p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row py-8 -mt-10 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full md:w-1/2'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Methodology</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                We involved 15 end-users from our target demographic, including both novice and experienced investors. Research techniques included user interviews, task completion exercises, and surveys to gather comprehensive feedback.
            </p>
        </div>
        <div className='flex flex-col text-2xl w-full md:w-1/2'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Process</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                Data was collected through recorded user sessions and surveys. This qualitative data was then analyzed to identify common pain points, preferences, and suggestions for improvement.
            </p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row py-8 -mt-8 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Findings & Insights</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
            <strong> Feel of the Dashboard: </strong>Users generally found the dashboard visually appealing and intuitive, though some suggested that a customizable layout could enhance the experience.<br/>
            <strong> Values Presented: </strong>The presentation of financial values was clear and informative, but some users desired additional context and explanatory tooltips for better understanding.<br/>
            <strong> Money Organization: </strong>The organization of financial data was praised for its clarity, but users recommended options to further categorize and filter data for more personalized views.<br/>
</p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row py-8 -mt-8 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full md:w-3/8'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Analysis</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                The data collected from user sessions and surveys highlighted several areas for improvement. By understanding user preferences and pain points, we were able to refine the dashboard to better meet user needs.
            </p>
        </div>
        <div className='flex flex-col text-2xl w-full md:w-5/8'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Solutions</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                Based on the feedback, we implemented several changes:<br/>
                - Introduced customizable layout options.<br/>
                - Added explanatory tooltips and contextual help.<br/>
                - Enhanced categorization and filtering options.
            </p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row py-8 -mt-10 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full'>
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Conclusion</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                The acceptance testing of the dashboard provided valuable insights that led to significant improvements. By addressing user feedback, we enhanced the overall user experience, making the Finturo dashboard more accessible, informative, and user-friendly for both novice and experienced investors.
            </p>
        </div>
    </div>
</section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col py-8  border-2 border-black dark:border-white mt-4 rounded-xl  h-full w-full mx-auto'>
 <div className='px-8 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-full text-center sm:text-left text-black dark:text-white'>A/B Testing</h2>
                 </div>

                 <div className='mt-8 w-full items-center px-12 sm:px-8 lg:w-full gap-4 flex flex-col md:flex-row justify-center h-auto'>
            <div className='flex flex-col items-center'>
            <Suspense fallback={<Loader/>}>
                 <Testing1 className="w-full h-auto" />
                </Suspense>
                <p className='GtRegular mt-4 w-64 lg:w-96 text-center text-lg sm:text-lg md:text-xl text-black dark:text-white'>
                    Preference for personal greeting over general
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <Testing2 className='w-full h-auto' loading='lazy' />
                <p className='GtRegular mt-4 w-64 lg:w-96 text-center text-lg sm:text-lg md:text-xl text-black dark:text-white'>
                    Preference for current value over value invested
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <Testing3 className='w-full h-auto' loading='lazy' />
                <p className='GtRegular mt-4 w-64  lg:w-96 text-center text-lg sm:text-lg md:text-xl text-black dark:text-white'>
                    Preference for goal emphasized over years left
                </p>
            </div>
        </div></section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-4 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-between items-center flex-col sm:flex-row text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <div className='w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>
                <h2 className='GtRegularBold'>Calculator</h2>
            </div>
            <div className='w-2/3 sm:w-1/3 md:w-1/4 mt-2 sm:mt-0 text-center sm:text-right text-gray-800 dark:text-gray-300'>
            <Suspense fallback={<Loader/>}>
                 <Progress2 className="" />
                </Suspense>
            </div>
        </div>
        {/* Description container */}
         </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Working Model</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className='items-center w-full bg-transparent sm:px-12 mt-4 '>
        <img src={InvestorGov} loading='lazy'  className="w-full bg-transparent h-auto" />
        </div>
        <p className='GtRegular  mt-4 text-center text-lg sm:text-lg md:text-xl text-black dark:text-white'>
        Building upon our validation of investor.gov's website, our design focused on providing an intuitive and efficient calculator interface. 
        </p>         </div>    </div>
    </section>
  {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
  <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Interaction Design</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className='w-full h-full grid grid-cols-2 md:grid-cols-3  justify-center gap-6 px-8 py-4'>
        <Suspense fallback={<Loader/>}>
               <CalculatorDesign1 className="items-center justify-center w-full px-2 sm:px-12 h-auto" /> 
        </Suspense>
        <Suspense fallback={<Loader/>}>
               <CalculatorDesign2 className="items-center justify-center w-full px-2 sm:px-12  h-auto" /> 
        </Suspense>
        <Suspense fallback={<Loader/>}>
               <CalculatorDesign3 className="items-center justify-center w-full px-2 sm:px-12 h-auto" /> 
        </Suspense>
        <Suspense fallback={<Loader/>}>
               <CalculatorDesign4 className="items-center w-full px-2 sm:px-16 h-auto" /> 
        </Suspense>
        <Suspense fallback={<Loader/>}>
               <CalculatorDesign5 className="items-center w-full px-2 sm:px-6 h-auto" /> 
        </Suspense>
        <Suspense fallback={<Loader/>}>
               <CalculatorDesign6 className="items-center w-full px-2 sm:px-6 h-auto" /> 
        </Suspense>
        </div>


        <p className='GtRegular  mt-4 text-center text-lg sm:text-lg md:text-xl text-black dark:text-white'>
        We conducted extensive prototyping with six interface variations—type box, carousel, slider, drop-down, dial, 
        and plus/minus buttons—to identify the most intuitive path to accessing the value screen for calculations. Each 
        prototype informed our design decisions, aiming for a seamless user experience.
        </p>         </div>    </div>
    </section>
  {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
  <section className='flex flex-col sm:flex-row py-4 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-between items-center flex-col sm:flex-row text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <div className='w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>
                <h2 className='GtRegularBold'>Onboarding</h2>
            </div>
            <div className='w-2/3 sm:w-1/3 md:w-1/4 mt-2 sm:mt-0 text-center sm:text-right text-gray-800 dark:text-gray-300'>
            <Suspense fallback={<Loader/>}>
                 <Progress3 className="" />
                </Suspense>
            </div>
        </div> 
    
        {/* Description container */}
         </div>  </section>
  {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
  <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>User Flow</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className=' mt-4 items-center justify-center flex flex-col w-full'>
        <div className=' mt-2 w-full sm:w-3/4 flex flex-row h-auto'>
        <Suspense fallback={<Loader/>}>
               <FinturoUserFlow1 className="w-full mr-2 h-auto" /> 
        </Suspense>
        </div>
        <div className='w-full sm:w-3/4 mt-2  flex flex-row h-auto'>
        <Suspense fallback={<Loader/>}>
               <FinturoUserFlow2 className="w-full mr-2 h-auto" /> 
        </Suspense>
        </div>
        
     </div>
        
     <p className='GtRegular  mt-4 text-center text-lg sm:text-lg md:text-xl text-black dark:text-white'>
        Our onboarding process efficiently guides users through key features, from account creation to personalized 
        settings, ensuring a smooth transition into the Finturo experience.
</p>         </div>    </div>
    </section>
  {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
  <section className='flex flex-col py-8 border-2 rounded-xl border-2 border-black dark:border-white mt-4 rounded-xl h-full w-full mx-auto'>
 <div className='px-8 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-full text-center sm:text-left text-black dark:text-white'>Usability Testing</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'>Task:"Make an account"</h2>
                 </div>

                 <div className='flex flex-col md:flex-row py-8  rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full '>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Project Overview</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>Project Overview:The onboarding process is 
        crucial for introducing new users to Finturo, ensuring they can easily create an account and connect their investment accounts. 
        Our goal was to validate that this process is intuitive and user-friendly, meeting both user needs and business goals</p>
        </div>  
    </div>
    
<div className='flex flex-col md:flex-row py-8  -mt-10 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full md:w-1/2'>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Methodology</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>We involved 15 end-users from our target
             demographic, which included both novice and experienced investors. Our research techniques comprised user interviews, task completion 
             exercises, and surveys to gather comprehensive feedback.</p>
        </div>  
        <div className='flex flex-col text-2xl w-full md:w-1/2'>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Process</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>Data was collected through recorded 
            user sessions and surveys. This qualitative data was then analyzed to identify common pain points, preferences, and suggestions 
            for improvement.</p>
        </div>  
    </div>

    <div className='flex flex-col md:flex-row py-8 -mt-8 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full '>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Findigs & Insights</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
                <strong> Ease of Account Creation:</strong> Most users found the account creation process straightforward, 
                but some suggested that clearer instructions could further simplify it.<br/>
                <strong> Step-by-Step Guidance:</strong> While the three steps to connect accounts were generally well-received, 
                novice investors expressed a need for more detailed guidance at each step.<br/>
                <strong>User Feedback:</strong>Participants appreciated the clean and intuitive design but recommended adding visual cues to enhance navigation and reduce 
any potential confusion.
</p>
        </div>  
    </div>

    <div className='flex flex-col md:flex-row py-8  -mt-8 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full md:w-2/5'>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Analysis</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>The data collected from user sessions 
            and surveys highlighted several areas for improvement. By understanding user preferences and pain points, we were able to refine 
            the onboarding process to better meet user needs.</p>
        </div>  
        <div className='flex flex-col text-2xl w-full md:w-3/5'>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Solutions</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>Based on the feedback, 
            we implemented several changes: <br/>
            - Enhanced instructions during account creation.<br/>
            - More detailed, step-by-step guidance for connecting investment accounts.<br/>
            - Added visual cues and tooltips to improve navigation and user confidence.
            </p>
        </div>  
    </div>
    <div className='flex flex-col md:flex-row py-8 -mt-10 rounded-xl px-8 h-full w-full mx-auto'>
        <div className='flex flex-col text-2xl w-full '>  
            <h2 className='md:px-8 px-0 text-xl GtRegularBold text-center sm:text-left text-gray-800 dark:text-gray-300'>Conclusion</h2>
            <p className='md:px-8 px-0 mt-4 text-lg GtRegular md:text-xl text-black dark:text-white'>
The usability testing of the onboarding process provided valuable insights that drove significant improvements. By addressing user 
feedback, we enhanced the overall user experience, making Finturo more accessible and user-friendly for both novice and experienced investors.</p>
        </div>  
    </div>
</section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Reflection</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-800 dark:text-gray-300'></h2>
        </div>
        {/* Description container */}
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full text-black dark:text-white'>
            <p className='GtRegular text-center sm:text-left'>Venturing into new technologies like Tailwind CSS, React, and GitHub while managing MySQL 
            databases was an exhilarating challenge that enriched my skill set. Conducting intensive research and witnessing real people depend on my 
            designs instilled a profound sense of responsibility and motivation. Each hurdle became an opportunity for growth, pushing me to deliver 
            designs that not only met but exceeded expectations. This experience reaffirmed my passion for design and deepened my commitment to creating 
            impactful user experiences </p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    

 </Suspense>
    </div>
  );
};

export default FinturoProject;
