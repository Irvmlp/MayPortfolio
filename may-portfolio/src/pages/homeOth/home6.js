// Portfolio.js
import React from 'react';
import Header from '../../components/header';

function Portfolio() {
  return (
    <div> 
        <Header/>
      <section>
        <div className='w-full bg-white'>
            <div className='bg-red-200 w-2/3 h-screen relative'>
                <h3 className='md:text-[180px]/[150px] md:text-[160px] text-6xl absolute bottom-0 text-white LipoItalic'> IRVING LAMADRID </h3>
            </div>
          
            <div className='w-1/2 -1/2'>
                
            </div>
        </div>
      </section>
      <section>
      <div className='w-full bg-red-500'>
            <div className='bg-white w-2/3 h-screen relative'>
                <h3 className='md:text-[180px]/[150px] md:text-[160px] text-6xl absolute bottom-0 text-gray-200 LipoItalic'> IRVING LAMADRID </h3>
            </div>
            <div className='w-1/2 -1/2'>
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
