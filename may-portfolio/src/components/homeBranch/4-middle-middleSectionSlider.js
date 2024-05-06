import React from 'react';

const middleSection = () => {
  return (
        <div className="h-full w-full">

            <div className='flex flex-col md:h-full w-full'>
                <div className='h-1/5 text-left '>
                    <h2 className='GtRegular w-full md:w-3/4 md:mt-4 md:text-l px-6 md:px-4'> As an empathetic and natural builder, I am always looking to solve complex problems around me through intuitive designs.</h2>
                </div>

                <div className='h-1/5 w-ful top-line '>
                <h2 className='font-bold text-2xl font-inter text-left text-gray-900 w-full md:mt-6 md:text-3xl mt-2 mb-2  md:mb-0 md:-ml-2 px-6'> Building Solutions </h2>
                </div>

                <div className='h-1/5 w-ful top-line '>
                <h2 className='font-bold text-2xl font-inter text-left text-gray-600 w-full md:mt-6 md:text-3xl mt-2 mb-2 md:-ml-2 md:mb-0 px-6'> User Experience </h2>
                </div>

                <div className='h-1/5 w-ful top-line '>
                <h2 className='font-bold text-2xl font-inter text-left text-gray-400 w-full md:mt-6 md:text-3xl mt-2 mb-2  md:-ml-2 md:mb-0 px-6'> Branding / Marketing </h2>
                </div>

                <div className='h-1/5 text-left top-line '>
                    <h2 className='GtRegular w-full md:w-3/4 text-left md:mt-4 md:text-xl px-6 md:px-4'> Tell me about your latest idea - </h2>
                </div>

            </div>
    </div>
  );
};

export default middleSection;
