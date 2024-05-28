import React, { Suspense, lazy } from 'react';

import Loader from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/loader.js'; // Adjust the path as necessary

import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/genie1.png';
import Mockup2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/genie2.png';
import Mockup3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/genie3.png';
import Mockup4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/genie4.png';
import Mockup5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/genie5.png';

import Phone1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/geniePhone1.png';
import Phone2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/geniePhone2.png';
import Phone3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/4.genie_pics/geniePhone3.png';

const CompAnalysisLightLazy = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JourneySvgs/CompAnalysisDarkLazy.js'));
const CompAnalysisDarkLazy = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JourneySvgs/CompAnalysisLightLazy.js'));
const TripleDiamondLightLazy = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JourneySvgs/TripleDiamondLightLazy.js'));
const TripleDiamondDarkLazy = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JourneySvgs/TripleDiamondDarkLazy.js'));
const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JourneySvgs/ProgressDarkLazy.js'));
const LazyProgressLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JourneySvgs/ProgressLightLazy.js'));


const JourneyGenie = () => {

  return (
    
    <div className="h-full min-w-full font-inter bg-[#ECD8AE] dark:bg-[#2C363D]">

    <Suspense fallback={<Loader/>}>
        <div className='w-full h-8 dark:flex hidden'>
          <LazyProgressDark />
        </div>
        <div className='w-full h-8 dark:hidden flex'>
          <LazyProgressLight />
        </div> 
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex  text-black dark:text-white  flex-col sm:flex-row py-8 mt-0 bg-transparent  rounded-xl border-2 dark:border-white border-black h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-3/5 h-full items-start justify-start sm:ml-4 '>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Startup: JourneyGenie</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-start items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left'>
            Leading product management efforts for JourneyGenie, overseeing MVP validation, prototype testing, 
            and conducting user research.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-2/5 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Team 6 | 2023</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-right'>Figma, Google Analytics, G Suite, Public Speaking</p>
        </div>    </div>   </section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
     <section className='mt-4  border-2 rounded-xl dark:border-white border-black items-center justify-center flex  w-full'>
       
         <div className='px-4 sm:px-6 md:px-10 w-full lg:w-5/6 h-auto'>
         <img src={Mockup1} loading='lazy' className="mr-4 mt-8 w-full h-auto" />         </div>     

          </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
   
<section className='flex flex-col sm:flex-row py-8 mt-4  dark:border-white border-black rounded-xl border-2 h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-2/5 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Our Story</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white '>
            A group of college friends passionate about travel came together to simplify trip planning.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-3/5 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>The Goal</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white '>The website gained widespread 
            popularity on campus, becoming the go-to platform for organizing and discovering new travel experiences.</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 
 <section className='flex  text-black dark:text-white  flex-col sm:flex-row py-8 mt-4 bg-transparent  rounded-xl border-2 dark:border-white border-black h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4 '>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>AI Trip Planner </h2>
        </div>
         <div className='flex flex-col md:flex-row px-8 w-full h-auto'>
        <div className='flex flex-col w-full h-auto'>
        <img src={Mockup2} loading='lazy' className="mr-4 mt-8 px-8 w-full h-auto" />
        <div className='flex md:mt-0 mt-4 items-center justify-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-4 text-black dark:text-white'>Simple Intuitive Interaction </p>
        </div> 
        </div>
        <div className='flex flex-col w-full h-auto'>
        <img src={Mockup3} loading='lazy' className="mr-4 mt-8 px-8  w-full  h-auto " />
        <div className='flex md:mt-0 mt-4 items-center justify-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-4 text-black dark:text-white'>Personalized Itenerary</p>
        </div> 
        </div>  </div>  </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>The Process</h2>
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center text-black dark:text-white sm:justify-end items-center text-lg sm:text-xl md:text-2xl w-full'>  
            <p className='GtRegular mt-4 text-center sm:text-left'>
            1. Define the problem
            </p>   
            <p className='GtRegular text-center mt-4 sm:text-left'>
            2. Pretotype / Prototype Solution
            </p> 
            <p className='GtRegular text-center mt-4 sm:text-left'>
            3. Test and Validate <span className='text-bold'> Minimum Viable Product </span>
            </p>     
             </div>    </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full  items-center justify-center sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>1. Define the problem</h2>
          
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center sm:justify-end text-black dark:text-white items-center text-lg sm:text-xl md:text-2xl  w-full'>  
            <p className='GtRegular mt-4 text-center sm:text-left'>
            Using the triple diamond approach we chose the problem space of trip planning & logistics
            </p>   
             </div> 
            
             <div className='items-center  w-full justify-center h-auto mt-4 px-8'>
            <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <TripleDiamondDarkLazy className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <TripleDiamondLightLazy className="" />
               </Suspense>
             </div>            </div> 


                </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold  text-black dark:text-white '>1. User Needs</h2>
        </div>
        {/* Description container */}
        <div className='px-4 mt-4 lg:mt-8 flex flex-col justify-center sm:justify-end items-center text-black dark:text-white text-lg sm:text-xl md:text-2xl sm:w-full'>  
            <p className='GtRegular text-center sm:text-left'>
            Users need a clear budget regulation so they can know whether they can afford the speculated trip
            </p>   
            <p className='GtRegular text-center mt-2 sm:text-left'>
            Users need intuitive logistics planning so they can enjoy the trip without worrying to much about the details
            </p> 
            <p className='GtRegular text-center mt-2 sm:text-left'>
           Users need a system to commemorate the trip so they can continue to remember the times they had down the years
            </p>     
             </div>    </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full  items-center justify-center sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>1. Competitor Analysis</h2>
          
        </div>
        {/* Description container */}
      


             <div className='items-center  w-full justify-center px-2 mt-4  sm:px-4 md:px-8 lg:px-16'>
            <div className='dark:flex hidden'>
                <Suspense fallback={<Loader/>}>
                 <CompAnalysisDarkLazy className="" />
                </Suspense>
            </div>
            <div className='dark:hidden flex'>
             <Suspense fallback={<Loader/>}>
               <CompAnalysisLightLazy className="" />
               </Suspense>
             </div>            </div> 
                </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full  items-center justify-center sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>2. First MVP Expirement </h2>
          
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center text-black dark:text-white items-center text-lg sm:text-xl md:text-2xl  w-full'>  
            <p className='GtRegular mt-4 text-center  sm:text-left'>
            Using the “fake door” we tested for : a. people who clicked the link  b. people who put their email address

            </p>   
             </div> 
             <div className='items-center justify-center px-8'>   
         <img src={Mockup4} loading='lazy' className="mr-4 mt-6 w-full h-auto" /> 
             </div>
        
             <div className='flex md:mt-0 mt-4 items-center justify-center text-black text-lg sm:text-xl md:text-2xl '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-4 text-black dark:text-white'>A. 65 clicked the link |  B.49 Signed Up </p>
        </div> 
          
                </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full  items-center justify-center sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full text-center sm:text-left text-black dark:text-white'>2. Second MVP Expirement </h2>
          
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center items-center text-lg sm:text-xl md:text-2xl w-full'>
    <p className='GtRegular mt-4 text-center text-black dark:text-white'>
        Utilized various promotional strategies to gauge the most critical user needs.
    </p>   
</div>

             <div className='items-center justify-center px-8'>   
         <img src={Mockup5} loading='lazy' className="mr-4 mt-6 w-full h-auto" /> 
             </div>
             <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center items-center text-lg sm:text-xl md:text-2xl w-full'>
    <p className='GtRegular mt-4 text-center text-black dark:text-white'>
        Following an 85/10/5 distribution among identified needs, we focused our design efforts on logistics, informing subsequent prototype iterations.
    </p>   
</div>

          
                </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Prototype Testing</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
        <div className='w-full h-full flex justify-center flex-row py-8'>
        <img src={Phone1} loading='lazy' className="w-1/3  h-auto" />
         <img src={Phone2} loading='lazy' className="w-1/3  h-auto" />
         <img src={Phone3} loading='lazy' className="w-1/3  h-auto" />
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
            <h2 className='GtRegularBold w-full text-center text-black dark:text-white'>Getting the <span className='italic'> right</span> design, and getting the design <span className='italic'> right</span> </h2>

        </div>
       </div>  </section>
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
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>Reflecting on this journey, I've not only 
            honed my project management skills but also discovered the profound impact of building with purpose. Each step, from validating
             MVPs to refining prototypes, has not only made me a stronger designer but also reinforced the importance of empathy-driven development. This experience has illuminated the intricate balance between creativity and strategy, ultimately shaping me into a more versatile and insightful creator. </p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    

     </Suspense>
    </div>
  );
};

export default JourneyGenie;
