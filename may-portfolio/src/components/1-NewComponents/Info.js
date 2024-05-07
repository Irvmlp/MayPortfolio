// Header.js
import React from 'react';
import Tools from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-NewComponents/tools.js';

const Main = () => {
   
  return (
    <div className="h-full">
       <div className='h-1/6 flex items-center border-b-2 py-4 px-4 md:py-0 border-neutral-800'>
        <h2 className='w-full text-l GtRegular text-center md:text-left font-light md:text-2xl'>
            I am a natural builder, empathetic and creative.
        </h2>
        </div>

        <div className='h-1/4 flex items-center border-b-2 py-2 px-4  md:py-0 border-neutral-800'>
        <h2 className='w-full text-2xl GtRegularBold text-center md:text-left font-bold text-slate-600 md:text-4xl'>
            I love working for startups and freelancing for businesses.
        </h2>
        </div>

        <div className='h-1/3 w-full px-4 GtRegular border-b-2 pb-4 md:pb-0 border-neutral-800'>
                <h2 className='mt-8 font-bold text-2xl text-center md:text-left text-orange-300 w-full md:text-3xl '>Tools and skill's I've mastered: </h2>
                <Tools/>
        </div>

        <div className='h-1/5 text-center md:text-left '>
                    <h2 className='GtRegular w-full md:w-3/4 md:font-bold text-left md:mt-4 md:text-l px-6 md:px-4'> Tell me about your latest idea - </h2>
                </div>
       

    </div>
  );
};

export default Main;




