// Portfolio.js
import React from 'react';
import Header from '../components/header';

function Portfolio() {
  return (
    <div> 
        <Header/>
      <section>
        <div className='w-full bg-[#DFFDFF]'>
            <div className=' w-1/2 h-screen relative'>
                <h3 className='md:text-[180px]/[150px] md:text-[160px] text-6xl absolute top-40 text-orange-300 LipoItalic'> IM</h3>
            </div>
              <div className='bg-[#EE964B]'>
                Hello 
              </div>
            <div className='w-1/2 -1/2'>
                
            </div>
        </div>
      </section>
      <section>
      <div className='w-full bg-red-500'>
            <div className='bg-white w-2/3 h-screen relative'>
                <h3 className='md:text-[180px]/[150px] md:text-[160px] text-6xl absolute bottom-0 text-gray-200 LipoItalic'> LP </h3>
            </div>
            <div className='w-1/2 -1/2'>
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
