import React from 'react';
import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/gallery/LlamaMockUp.jpeg';
import { ReactComponent as ArrowL } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowL.svg';
import { ReactComponent as ArrowR } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowR.svg';


const LlamaProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter">
        {/* image of Mockup */}
     <section className='mt-12 bg-gray-300  items-center justify-center flex min-h-[450px] w-full'>
        <div className='w-1/2 h-1/2'>
         <img src={Mockup1} alt="Image" loading='lazy' className="mr-4 mt-8 w-full h-auto" />
        </div>
     </section>
     {/* 1. Story */}
     <section className='flex flex-col md:flex-row py-8 mt-12  h-full w-full mx-auto'>
    <div className='flex border-b-2 w-full md:w-1/2 h-1/2 md:h-full border-x-slate-800  flex-col'>
        <div className='flex text-4xl w-full'>
            <h2 className='GtRegular'>The Story</h2>
        </div>
        <div className='flex h-24 mt-12 items-center mark bg-white text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex mt-2 flex-row'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
    </div>   
    <div className='flex border-b-2 w-full md:w-1/2 h-1/2 md:h-full border-x-slate-800  flex-col'>
        <div className='flex text-4xl w-full justify-end'>
            <h2 className='GtRegular' >The Mission</h2>
        </div>
        <div className='flex h-24 mt-12 items-center text-lg justify-end '>
            <p className='GtRegular'>Our story starts in Phoenix, both of my sisters are teachers.</p>
        </div>
    </div>
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 bg-white  h-full w-full mx-auto'>
   
    <div className='flex border-b-2 w-full h-12 items-end border-slate-500 '>  
            <h2 className='text-2xl md:text-4xl'>1. Agile Methodologies</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 '>  
            <h2 className='text-lg md:text-2xl'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 3. Prompter */}
 <section className='flex flex-col py-8  bg-white h-full w-full mx-auto'>
    <div className='flex border-b-2 w-full h-12 items-end border-slate-500 '>  
            <h2 className='text-2xl md:text-4xl'>2. Incoporating AI</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 '>  
            <h2 className='text-lg md:text-2xl'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
    {/* 4. User Needs and Design Principles */}
    <section className='flex flex-col md:flex-row py-8 mt-12  h-full w-full mx-auto'>
    <div className='flex border-b-2 w-full md:w-1/2 h-1/2 md:h-full border-x-slate-800  flex-col'>
        <div className='flex text-4xl w-full'>
            <h2 className='GtRegular'>User Needs</h2>
        </div>
        <div className='flex h-24 mt-12 items-center mark bg-white text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex mt-2 flex-row'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
    </div>   
    <div className='flex border-b-2 w-full md:w-1/2 h-1/2 md:h-full border-x-slate-800  flex-col'>
        <div className='flex text-4xl w-full justify-end'>
            <h2 className='GtRegular' >Design Principles</h2>
        </div>
        <div className='flex h-24 mt-12 items-center text-lg justify-end '>
            <p className='GtRegular'>Our story starts in Phoenix, both of my sisters are teachers.</p>
        </div>
    </div>
</section>

<section className='mt-12 bg-gray-300 border-b-2 border-stone-800 min-h-[450px] w-full'>
        
 </section>


 {/* 2. Product */}
 <section className='flex flex-col md:flex-row py-8 mt-12 border-b-2 border-stone-800 h-full w-full mx-auto'>
    <div className='flex border-b-2 w-full md:w-1/2 h-1/2 md:h-full border-x-slate-800 bg-red-100 flex-col'>
        <div className='flex text-4xl w-full'>
            <h2>The Story</h2>
        </div>
        <div className='flex h-24 mt-12 items-center text-lg bg-blue-200'>
            <p className=''> Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
    </div>   
    <div className='flex border-b-2 w-full md:w-1/2 h-1/2 md:h-full border-x-slate-800 bg-red-100 flex-col'>
        <div className='flex text-4xl w-full justify-end'>
            <h2>The Mission</h2>
        </div>
        <div className='flex h-24 mt-12 items-center text-lg justify-end bg-blue-200'>
            <p>Our story starts in Phoenix, both of my sisters are teachers.</p>
        </div>
    </div>
</section>











     <section className='mt-12 bg-gray-300 border-b-2 border-stone-800 min-h-[450px] w-full'>
        
     </section>
     
      

    </div>
  );
};

export default LlamaProject;
