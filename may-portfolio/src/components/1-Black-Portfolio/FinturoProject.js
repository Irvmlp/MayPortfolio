import React from 'react';
import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/gallery/LlamaMockUp.jpeg';
import { ReactComponent as ArrowL } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowL-white.svg';
import { ReactComponent as ArrowR } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/arrowR-white.svg';


const LlamaProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter">
        {/* image of Mockup */}
     <section className='mt-12 border-2 rounded-xl border-white items-center justify-center flex min-h-[450px] w-full'>
        <div className='w-full h-full flex justify-center flex-row'>
         <img src={Mockup1} alt="Image" loading='lazy' className=" w-48 h-96" />
         <img src={Mockup1} alt="Image" loading='lazy' className=" w-48 h-96" />
        </div>
     </section>

     {/* 1. Story */}
     <section className='flex flex-col md:flex-row py-8 mt-12 rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='GtRegularBold text-white'>The Story</h2>
        </div>
        <div className='flex h-24 items-center text-white text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex flex-row px-8 md:px-6'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
    </div>  
    <div className='flex w-full md:w-1/2 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold text-white' >The Mission</h2>
        </div>
        <div className='flex h-24 items-center text-lg justify-end '>
            <p className='GtRegular text-white px-8 md:px-6'>Our story starts in Phoenix, both of my sisters are teachers.</p>
            <ArrowL className='h-8'/>  
        </div>
    </div>
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-white underline-offset-5 underline'>1. Agile Methodologies</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-white'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 3. Prompter */}
  <section className='flex flex-col py-8 border-2 border-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl md:text-4xl px-6 GtRegularBold text-white underline-offset-5 underline'>1. Agile Methodologies</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-white'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 1. Story */}
 <section className='flex flex-col md:flex-row py-8 mt-12 rounded-xl border-2 botder-white h-full w-full mx-auto'>
    <div className='flex  w-full md:w-1/2 h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='GtRegularBold text-white'>User Needs</h2>
        </div>
        <div className='flex h-24 items-center text-white text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex flex-row px-8 md:px-6'>  Our story starts in Phoenix, both of my sisters are teachers. </p>
        </div>
    </div>  
    <div className='flex w-full md:w-1/2 h-1/2 md:h-full flex-col'>
        <div className='flex px-8 text-4xl w-full justify-end'>
            <h2 className='GtRegularBold text-white' >Design Principles</h2>
        </div>
        <div className='flex h-24 items-center text-lg justify-end '>
            <p className='GtRegular text-white px-8 md:px-6'>Our story starts in Phoenix, both of my sisters are teachers.</p>
            <ArrowL className='h-8'/>  
        </div>
    </div>
</section>
    {/* 4. User Needs and Design Principles */}
 {/* 1. Story */}
 <section className='flex flex-col  py-8 mt-12 rounded-xl border-2 botder-white h-full w-full '>
    <div className='flex  w-full h-1/2 md:h-full  flex-col'>
        <div className='px-8 flex text-4xl w-full'>
            <h2 className='GtRegularBold text-white'>How Might We?</h2>
        </div>
        <div className='flex h-24 items-center justify-center text-white text-lg '>
            <ArrowR className='h-8'/>   
            <p className='GtRegular flex text-lg md:text-2xl flex-row px-8 md:px-6'>  HMW Create a product that saves teachers time while providing students a better education? </p>
        </div>
        <div className='flex h-24 items-center justify-center text-white text-lg '>
            <p className='GtRegular flex text-lg md:text-2xl flex-row px-8 md:px-6'>  HMW Create a product that saves teachers time while providing students a better education? </p>
            <ArrowL className='h-8'/>   
        </div>
        <div className='flex h-24 items-center justify-center text-white text-lg '>
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
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
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
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-white'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
</section>
 {/* 2. Product */}
 <section className='flex flex-col py-8 border-2 border-white mt-12 rounded-xl  h-full w-full mx-auto'>
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl  md:text-4xl px-8  GtRegularBold text-white underline-offset-5'>Figma</h2>
    </div>   
    <div className='mt-12  items-center justify-center flex  w-full'>
        <div className='w-auto h-full'>
         <img src={Mockup1} alt="Image" loading='lazy' className="w-full h-96" />
        </div>
     </div>
     <div className='flex w-full h-24 items-center mt-4 px-8'>  
            <h2 className='text-lg GtRegular md:text-2xl text-white'>1. The product UI/UX should reflect a project management software to offer 
            flexibility in planning classes and standards. </h2>
    </div>   
    <div className='flex w-full h-12 items-end  '>  
            <h2 className='text-2xl  md:text-4xl px-8  GtRegularBold text-white underline-offset-5'>Figma Plugins</h2>
    </div>   
    <div className='mt-12 items-center justify-center flex flex-col md:flex-row w-full'>
         <img src={Mockup1} alt="Image" loading='lazy' className="h-64 w-auto" />
         <img src={Mockup1} alt="Image" loading='lazy' className="h-64 w-auto" />
     </div>
</section>










     <section className='mt-12 bg-red-500 border-b-2 border-stone-800 min-h-[450px] w-full'>
        
     </section>
     
      

    </div>
  );
};

export default LlamaProject;
