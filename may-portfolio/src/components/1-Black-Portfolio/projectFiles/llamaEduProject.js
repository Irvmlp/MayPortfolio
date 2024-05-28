import React, { Suspense, lazy } from 'react';

import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/llama1.png';
import Mockup2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/llama2.png';
import Mockup3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/llama3.png';
import Mockup4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/llama4.png';
import Mockup5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/llama5.png';

import FigmaLLama from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/llamaFigma.png';
import FigmaPrototypes from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/figmaPrototypes.png';
import Brand1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand1.png';
import Brand2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand2.png';
import Brand3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand3.png';
import Brand4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand4.png';
import Brand5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand5.png';
import Brand6 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand6.png';
import Brand7 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/1.llama_pics/brand7.png';
import Loader from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/loader.js'; // Adjust the path as necessary


const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/llamaSvgs/ProgressDarkLazy.js'));
const LazyProgressLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/llamaSvgs/ProgressDarkLight.js'));
const UserJourney = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/llamaSvgs/UserJourney.js'));


const LlamaProject = () => {

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
            <h2 className='GtRegularBold text-black dark:text-white '>Startup: Llamaedu</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-start items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left'>
            Responsible for the UI/UX of the platform in addition to front end maintenance.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-2/5 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Team 5 | 2024</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-right'>Html, CSS, Javascript, JS Libraries, Github</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
     <section className='mt-4  border-2 rounded-xl dark:border-white border-black items-center justify-center flex  w-full'>
     <div className='px-4 sm:px-6 md:px-10 w-full lg:w-5/6 h-auto'>
         <img src={Mockup1} loading='lazy' className="mr-4 mt-8 w-full h-auto" />         </div>   
          </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
<section className='flex flex-col sm:flex-row py-8 mt-4  dark:border-white border-black rounded-xl border-2 h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-3/5 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Our Story</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white '>
            LlamaEdu was born out of a shared vision with my sisters, both dedicated teachers. Witnessing their 
            daily challenges in lesson planning and classroom management, we set out to create a platform tailored
             to meet these needs. Our mission is to empower teachers with tools that simplify their planning process 
             and enhance their teaching effectiveness.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-2/5 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>The Goal</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white '>With initial funding secured, 
            our goal is to launch LlamaEdu by July 2024. We aim to create a user-friendly platform that revolutionizes the way 
            teachers plan and execute their lessons.</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 dark:border-white border-black  h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-1/2 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Startup: Llamaedu</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            
            <img src={Mockup2} loading='lazy' className="mt-4 w-full h-auto" />
            <p className='GtRegular text-black dark:text-white  text-center sm:text-left'>
            Responsible for the UI/UX of the platform in addition to front end maintenance.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/2 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Team 5 | 2024</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
        <img src={Mockup3} loading='lazy' className="mt-4 w-full h-auto" />
            <p className='GtRegular text-center sm:text-right text-black dark:text-white '>Html, CSS, Javascript, JS Libraries, Github</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-1/2 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Startup: Llamaedu</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center text-black dark:text-white sm:justify-end items-center text-lg sm:text-xl  w-full'>
            <img src={Mockup4} loading='lazy' className="mt-4 w-full h-auto" />
            <p className='GtRegular text-center sm:text-left'>
            Responsible for the UI/UX of the platform in addition to front end maintenance.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/2 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Team 5 | 2024</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center text-black dark:text-white sm:justify-end items-center text-lg sm:text-xl  w-full'>
        <img src={Mockup5} loading='lazy' className="mt-4 w-full h-auto" />
            <p className='GtRegular text-center sm:text-right'>Html, CSS, Javascript, JS Libraries, Github</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-whitee h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>User Needs</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'> "User needs x so they can y" </h2>
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center text-black dark:text-white sm:justify-end items-center text-lg sm:text-xl md:text-2xl w-full'>  
            <p className='GtRegular mt-4 text-center sm:text-left'>
            - Teachers need an agile style week to week calander so they plan flexibily.
            </p>   
            <p className='GtRegular text-center mt-4 sm:text-left'>
            - Teachers need an easier method to differentiate lessons to ching needs.
            </p> 
            <p className='GtRegular text-center mt-4 sm:text-left'>
            - Teachers need an agile style week to week calander so they plan flexibily.
            </p>     
             </div>    </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Design Principles</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'>Visual </h2>
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center sm:justify-end text-black dark:text-white items-center text-lg sm:text-xl md:text-2xl  w-full'>  
            <p className='GtRegular mt-4 text-center sm:text-left'>
            Contrast: We use differences in color, size, shape, and texture to highlight important elements, 
            ensuring critical information stands out.
            </p>   
            <p className='GtRegular text-center mt-4 sm:text-left'>
            Emphasis: By creating focal points, we draw attention to the most important parts of a design, 
            guiding users seamlessly through their tasks.
            </p> 
            <p className='GtRegular text-center mt-4 sm:text-left'>
            Movement: Our designs guide the viewer’s eye through the interface using lines, 
            shapes, and positioning, creating a logical and intuitive flow.
            </p>     
             </div>    </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold  text-black dark:text-white '>How Might We?</h2>
        </div>
        {/* Description container */}
        <div className='px-4 mt-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-black dark:text-white text-lg sm:text-xl md:text-2xl w-full'>  
            <p className='GtRegular text-center sm:text-left'>
            HMW Create a product that saves teachers time while providing students a better education?
            </p>   
            <p className='GtRegular text-center mt-2 sm:text-left'>
            HMW empower teachers with tools that facilitate personalized learning for diverse classrooms?
            </p> 
            <p className='GtRegular text-center mt-2 sm:text-left'>
            HMW streamline communication between teachers, students, and parents to enhance the educational experience?
            </p>     
             </div>    </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4  rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl md:text-2xl w-full'>  
        <div className='  items-center justify-center flex flex-col w-full'>
        <div className='w-full md:w-3/4 h-auto'>
         <img src={Brand1} loading='lazy' className="w-full h-auto" />
        </div>
        <div className='w-full mt-2 md:w-3/4 flex flex-row h-auto'>
         <img src={Brand2} loading='lazy' className="w-1/2 h-auto" />
         <img src={Brand3} loading='lazy' className="w-1/2 h-auto" />
        </div>
        <div className='w-full mt-2 md:w-3/4 flex flex-row h-auto'>
         <img src={Brand4} loading='lazy' className="w-1/2 h-auto" />
         <img src={Brand5} loading='lazy' className="w-1/2 h-auto" />
        </div>
        <div className='w-full mt-2 md:w-3/4 flex flex-row h-auto'>
         <img src={Brand6} loading='lazy' className="w-1/2 h-auto" />
         <img src={Brand7} loading='lazy' className="w-1/2 h-auto" />
        </div> </div>     </div>   </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Design Principles</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'>Interaction </h2>
        </div>
        {/* Description container */}
        <div className='px-4 mt-0 lg:mt-4 flex flex-col justify-center text-black dark:text-white sm:justify-end items-center text-lg sm:text-xl md:text-2xl w-full'>  
        <p className='GtRegular mt-4 text-center sm:text-left'>
        Feedback: Providing clear feedback for user actions to ensure the interface is responsive and users feel in control.
            </p>   
            <p className='GtRegular text-center mt-4 sm:text-left'>
        Efficiency: Streamlining workflows to help teachers complete tasks quickly and accurately, saving precious time.
            </p> 
            <p className='GtRegular text-center mt-4 sm:text-left'>
            Consistency: Maintaining a consistent design language across the platform to reduce the learning curve and increase usability.
            </p>     
             </div>   </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>User Journey</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-300'></h2>
        </div>
        {/* Description container */}
        <div className='mt-4 items-center justify-center flex flex-col md:flex-row w-full px-4 h-auto'>
       
        <Suspense fallback={<Loader/>}>
               <UserJourney className="" />
               </Suspense>
     </div>  
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl md:text-2xl  w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>LlamaEdu's user journey map showcases creating a class"</p>
        </div>  
     </div>
     
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4  border-black dark:border-white  rounded-xl border-2 h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Figma Prototypes</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'>Components</h2>
        </div>
        {/* Description container */}
        <div className='mt-4 items-center justify-center  w-full px-8 h-auto'>
         <img src={FigmaLLama}  loading='lazy' className="w-full  h-auto" />
     </div>  
     </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4  rounded-xl border-2  border-black dark:border-white   h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left  text-black dark:text-white'>Figma Prototypes</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right dark:text-gray-300 text-gray-700'>Final Screens</h2>
        </div>
        {/* Description container */}
        <div className='mt-4 items-center justify-center flex flex-col md:flex-row w-full px-8 h-auto'>
         <img src={FigmaPrototypes}  loading='lazy' className="w-full h-auto" />
     </div>  
     </div>
 </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}   
 <section className='flex flex-col sm:flex-row py-8 mt-4 bg-transparent rounded-xl border-2  border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Maintence</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-600'></h2>
        </div>
        {/* Description container */}
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl md:text-2xl  w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>Utilizing GitHub, I maintained the front-end 
            by creating branches for new features, reviewing changes collaboratively with back-end developers, and ensuring seamless 
            integration and deployment. This process ensured our codebase remained clean, efficient, and ready for continuous improvement</p>
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
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>Working on LlamaEdu was a challenging yet 
            rewarding experience. Collaborating with a team of developers meant I had to take on more responsibility to ensure our 
            funding was effectively utilized. This required efficient hand-offs and meticulous attention to detail, which ultimately 
            strengthened my skills in UI/UX design and front-end development. The experience taught me the importance of empathy in 
            design, as understanding our users' needs was key to creating a successful product.</p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    

   </Suspense>
    </div>
  );
};

export default LlamaProject;
