import React, { Suspense, lazy } from 'react';
import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/brand1.png';
import Mockup2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/brand2.png';
import Mockup3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/brand3.png';
import Mockup4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/brand4.png';

import phone1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone1.png';
import phone2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone2.png';
import phone3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone3.png';
import phone4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone4.png';
import phone5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone5.png';
import phone6 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone6.png';
import phone7 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone7.png';
import phone8 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone8.png';
import phone9 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/5.pelos_pics/phone9.png';

const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/PelosSvgs/ProgressDarkLazy.js'));
const LazyProgressLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/PelosSvgs/ProgressDarkLight.js'));

const PelosProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter bg-[#ECD8AE] dark:bg-[#2C363D]">

<Suspense fallback={<div>Loading...</div>}>
        <div className='w-full h-8 dark:flex hidden'>
          <LazyProgressDark />
        </div>
        <div className='w-full h-8 dark:hidden flex'>
          <LazyProgressLight />
        </div>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex  text-black dark:text-white  flex-col sm:flex-row py-8 mt-0 bg-transparent  rounded-xl border-2 dark:border-white border-black h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-3/4 h-full items-start justify-start sm:ml-4 '>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Pelos Coco</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-start items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left'>
            Created a comprehensive branding package and developed a user-friendly food ordering website.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/4 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>Freelance  | 2024</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-right'>Illustrator, Photoshop, Figma</p>
        </div>    </div>   </section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
     <section className='mt-4  border-2 rounded-xl dark:border-white border-black items-center justify-center flex  w-full'>
        <div className='w-full px-4 sm:px-16  h-full grid grid-cols-1 gap-2 md:grid-cols-2 mb-12'>
         <img src={Mockup1} loading='lazy' className="mr-4 mt-8 w-full h-auto" /> 
         <img src={Mockup3} loading='lazy' className="mr-4 mt-0 sm:mt-2 md:mt-8 w-full h-auto" />  
         <img src={Mockup2} loading='lazy' className="mr-4 sm:mt-2 w-full h-auto" /> 
         <img src={Mockup4} loading='lazy' className="mr-4 mt-0 sm:-mt-20 md:-mt-8 lg:-mt-14 xl:-mt-20 w-full h-auto" /> 
         </div>  

          </section>
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
        <img src={phone1} loading='lazy' className="w-1/3  h-auto" />
         <img src={phone2} loading='lazy' className="w-1/3  h-auto" />
         <img src={phone3} loading='lazy' className="w-1/3  h-auto" />
        </div>

        <div className='w-full h-full flex justify-center flex-row'>
        <img src={phone4} loading='lazy' className="w-1/3  h-auto" />
         <img src={phone5} loading='lazy' className="w-1/3  h-auto" />
         <img src={phone6} loading='lazy' className="w-1/3 h-auto" />
        </div>

        <div className='w-full h-full flex justify-center flex-row py-8'>
        <img src={phone7} loading='lazy' className="w-1/3 h-auto" />
         <img src={phone8} loading='lazy' className="w-1/3 h-auto" />
         <img src={phone9} loading='lazy' className="w-1/3 h-auto" />
        </div>

            <p className='GtRegular mt-4 sm:mt-8 text-center text-xl sm:text-xl md:text-2xl sm:text-left text-black dark:text-white'>
            Intuitive, clean, and brand aligned UI/UX for their food app.
            </p>        </div>    </div>
    </section>
    
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
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>Working on Pelos Coco's branding and 
            food ordering website was a rewarding experience. Supporting a local Phoenix restaurant's opening was incredibly 
            fulfilling, and I take pride in knowing my contributions will help them grow their presence. This project not only 
            allowed me to flex my design skills but also reinforced the importance of user-centered design, ultimately making me a 
            stronger and more versatile designer.






</p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    

    

 </Suspense>
    </div>
    
  );
};

export default PelosProject;
