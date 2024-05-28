import React from 'react';
import TTools from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/za-other/foot/sider/5-tools.js';

const middleSection = () => {
  return (
        <div className="h-full w-full bg-[#F5F5F5]">

            <div className='flex flex-col md:h-full w-full'>
                <div className='h-1/5 text-left mt-4'>
                    <h2 className='GtRegular w-full md:w-3/4 md:mt-4 md:text-xl px-6 md:px-4'> Empathetic and creative natural builder</h2>
                </div>

                <div className='h-2/5 w-ful top-line '>
                <h2 className='font-bold text-2xl font-inter text-left text-gray-900 w-4/5 md:mt-10 md:text-3xl mt-2 mb-2  md:mb-0 md:-ml-2 px-6'> I build products and solutions, I love working for startups and freelance</h2>
                </div>

                <div className='h-3/5 w-ful top-line '>
                <h2 className='font-bold text-2xl font-inter text-left text-orange-300 w-full md:mt-10 md:text-3xl mt-2 mb-2  md:-ml-2 md:mb-0 px-6'>Tools and skill's I've mastered: </h2>
                <TTools/>
                </div>

                <div className='h-1/5 text-left top-line '>
                    <h2 className='GtRegular w-full md:w-3/4 text-left md:mt-4 md:text-xl px-6 md:px-4'> Tell me about your latest idea :D </h2>
                </div>

            </div>
    </div>
  );
};

export default middleSection;
