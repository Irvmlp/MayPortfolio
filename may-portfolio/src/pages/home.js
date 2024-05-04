// Portfolio.js
import React from 'react';

function Portfolio() {
  return (
    <div>
      <section>
        <div className='w-full bg-red-500'>
            <div className='bg-black w-2/3 h-screen relative'>
                <h3 className='md:text-[160px]/[150px] text-[160] absolute bottom-0 text-white LipoItalic'> IRVING LAMADRID </h3>
            </div>
            <div className='w-1/2 -1/2'>
                
            </div>
        </div>
      </section>
      <section>
        <div className='w-full bg-red-500'>
            <div className='bg-red-200 w-2/3 h-screen relative'>
                <h3 className='md:text-[160px]/[150px] text-[160] absolute bottom-0 text-white LipoItalic'> IRVING LAMADRID </h3>
            </div>
            <div className='w-1/2'>
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
