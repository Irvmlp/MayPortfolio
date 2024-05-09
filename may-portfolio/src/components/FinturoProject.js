import React from 'react';
import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/gallery/LlamaMockUp.jpeg';


const LlamaProject = () => {

  return (
    
    <div className="h-full min-w-full">
        {/* image of Mockup */}
     <section className='mt-12 bg-red-300 border-b-2 items-center justify-center flex border-stone-800 min-h-[450px] w-full'>
        <div className='w-1/2 h-1/2'>
         <img src={Mockup1} alt="Image" loading='lazy' className="mr-4 mt-8 w-full h-auto" />
        </div>
     </section>
     {/* 1. Story */}
     <section className='flex flex-col py-8 mt-12 bg-orange-300 border-b-2 border-stone-800 min-h-[450px] w-full'>
        <div className='flex border-b-2 border-x-slate-800 mx-12 flex-row bg-red-200 h-12'>
            <div className='flex text-3xl items-end w-1/4'>
                <h2> 1. The Story</h2>
            </div>
            <div className='flex w-3/4'> </div>
        </div>
        <div className='flex flex-row bg-white h-12'>
        </div>
        <div className='flex flex-row bg-gray-200 h-12'>
        </div>
        <div className='flex flex-row bg-white h-12'>
        </div>
     </section>
     <section className='mt-12 bg-orange-300 border-b-2 border-stone-800 min-h-[450px] w-full'>
        
     </section>
     
      

    </div>
  );
};

export default LlamaProject;
