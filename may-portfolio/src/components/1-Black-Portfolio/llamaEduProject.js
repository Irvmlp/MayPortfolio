import React from 'react';
import { ReactComponent as ArrowL } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowL.svg';
import { ReactComponent as ArrowR } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowR.svg';
import { ReactComponent as LLamaUserJourney } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/llamaUserJourney.svg';

import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/llama1.png';
import Mockup2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/llama2.png';
import Mockup3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/llama3.png';
import FigmaLLama from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/llamaFigma.png';


const LlamaProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter">

 {/* 1. Story */}    
  <section className='flex flex-col md:flex-row py-8 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-3/5 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='px-8 GtRegularBold text-[#0542BA]'>Startup: Llamaedu</h2>
        </div>
        <div className='flex h-18 items-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-16'>Responsible for the UI/UX of the platform in addition to front end maintence. </p>
        </div>
    </div>  
    <div className='flex w-full md:w-2/5 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold px-8 text-[#0542BA]'>Team-5 | 2024</h2>
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
     <section className='flex flex-col md:flex-row py-8 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='px-8 GtRegularBold text-[#0542BA]'>The Story</h2>
        </div>
        <div className='flex h-24 items-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-16'>Both of my sisters our teachers. With my sisters idea and my experience in Product Design, I helped them with the UI/UX aspect. </p>
        </div>
    </div>  
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
    <div className='px-8 flex justify-end text-4xl w-full'>
    <h2 className='px-8 GtRegularBold text-[#0542BA]'>The Vision</h2>
</div>
<div className='flex h-24 justify-end items-center text-black text-lg'>
    <p className='GtRegular justify-end text-right flex flex-row px-8 mt-2 md:px-16'>Both of my sisters our teachers. With my sisters idea and my experience in Product Design, I helped them with the UI/UX aspect.</p>
</div>
    </div>  
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-[#0542BA]'>1. Agile Methodologies</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-1/2 h-1/2'>
         <img src={Mockup2} loading='lazy' className="mr-4 -mt-4 md:mt-8 w-full h-auto" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center px-8 mt-12 md:mt-0'>  
            <h2 className='text-lg GtRegular md:text-2xl text-black'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>

<section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-[#0542BA]'>Integrating AI</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-1/2 h-1/2'>
         <img src={Mockup3} loading='lazy' className="mr-4 -mt-4 md:mt-8 w-full h-auto" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center px-8 mt-12 md:mt-0'>  
            <h2 className='text-lg GtRegular md:text-2xl text-black'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 1. Story */}
 <section className='flex flex-col md:flex-row py-8 mt-12 bg-white rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='GtRegularBold text-[#0542BA]'>User Needs</h2>
        </div>
        <div className='flex h-24 items-center text-black text-lg font-bold '>
            <ArrowR className='-mt-2 h-8'/>   
            <p className='GtRegular flex flex-row px-8 md:px-6'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
        <div className='flex -mt-12 h-24 items-center text-black text-lg font-bold '>
            <ArrowR className='-mt-2 h-8'/>   
            <p className='GtRegular flex flex-row px-8 md:px-6'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
        
    </div>  
    <div className='flex w-full md:w-1/2 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold text-[#0542BA]' >Design Principles</h2>
        </div>
        <div className='flex h-24 items-center text-lg justify-end '>
            <p className='GtRegular text-black px-8 md:px-6 font-bold'>Our story starts in Phoenix, both of my sisters are teachers.</p>
            <ArrowL className='mb-2 h-8'/>  
        </div>
        <div className='flex h-24 -mt-12 items-center text-lg justify-end '>
            <p className='GtRegular text-black px-8 md:px-6 font-bold'>Our story starts in Phoenix, both of my sisters are teachers.</p>
            <ArrowL className='mb-2 h-8'/>  
        </div>
    </div>
</section>
    {/* 4. User Needs and Design Principles */}
 {/* 1. Story */}
 <section className='flex flex-col  py-8 mt-12 rounded-xl border-2 bg-white botder-white h-full w-full '>
    <div className='flex  w-full h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='GtRegularBold text-[#0542BA]'>How Might We?</h2>
        </div>
        <div className='flex h-24 items-center justify-center text-black font-bold text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex text-lg md:text-2xl flex-row px-8 md:px-6'>  HMW Create a product that saves teachers time while providing students a better education? </p>
        </div>
        <div className='flex h-24 items-center justify-center text-black font-bold text-lg '>
            <p className='GtRegular flex text-lg md:text-2xl flex-row px-8 md:px-6'>  HMW Create a product that saves teachers time while providing students a better education? </p>
            <ArrowL className='h-8'/>   
        </div>
        <div className='flex h-24 items-center justify-center text-black font-bold text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex text-lg md:text-2xl flex-row px-8 md:px-6'>  HMW Create a product that saves teachers time while providing students a better education? </p>
        </div>
    </div>  
</section>
    {/* 4. User Needs and Design Principles */}

    <section className='flex flex-col md:flex-row py-8 mt-12 rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='GtRegularBold text-white'>Early Concept</h2>
        </div>
        <div className='flex h-64 items-center text-white text-lg bg-gray-600 '>
           
            <p className='GtRegular flex flex-row px-8 md:px-6'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
    </div>  
    <div className='flex w-full md:w-1/2 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold text-white' >Initial Prototypes</h2>
        </div>
        <div className='flex h-64 items-center text-lg justify-end bg-gray-200'>
            <p className='GtRegular text-white px-8 md:px-6'>Our story starts in Phoenix, both of my sisters are teachers.</p>
          
        </div>
    </div>
</section>
 {/* 3. Prompter */}
 <section className='flex flex-col py-8 border-2 border-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-white underline-offset-5 underline'>1.Creating the Llama Edu Brand</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-white'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
    {/* split here bwtween brand and animatois */}
    <div className='flex w-full h-12 items-end mt-8  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-white underline-offset-5 underline'>1.Creating the Llama Edu Brand</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-white'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl  md:text-4xl px-8  GtRegularBold text-[#0542BA] underline-offset-5'>Figma</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full flex flex-row'>
         <img src={FigmaLLama}  loading='lazy' className="w-full h-96" />
         <img src={FigmaLLama}  loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-black'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 2. Product */}

<section className='flex flex-col py-8 border-2 border-white bg-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-[#0542BA]'>Integrating AI</h2>
    </div>   
    <div className='mt-0 items-center justify-center flex  w-full'>
        <div className='w-full'>
        <LLamaUserJourney className='w-full h-auto' loading='lazy'/>
        </div>
     </div>
     <div className='flex w-full h-24 items-center px-8 mt-4 md:mt-0'>  
            <h2 className='text-lg GtRegular md:text-2xl text-black'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>




     <section className='mt-12 bg-red-500 border-b-2 border-stone-800 min-h-[450px] w-full'>
        
     </section>
     
      

    </div>
  );
};

export default LlamaProject;
