// Portfolio.js
import React from 'react';
import Header from '../components/header';

function Portfolio() {
  return (
    <div> 
        <Header/>
      <section>
      <div className='w-full bg-black flex justify-between'>
    <div className='bg-red-500 w-1/3  h-screen'>
        <div className='flex flex-col items-center text-left justify-end h-full'> 
            <h2 className='md:text-6xl text-4xl text-gray-200 LipoItalic'> LlamaEdu.com </h2>
            <h2 className='md:text-6xl text-4xl text-gray-200 LipoItalic'> Jamipainting.com </h2>
            <h2 className='md:text-6xl text-4xl text-gray-200 LipoItalic'> Finturo.com </h2>
            <h2 className='md:text-6xl text-4xl text-gray-200 LipoItalic'> JourneyGenie.com </h2>
        </div>
    </div>
    <div className='w-1/2'></div>
</div>
      </section>
      
    </div>
  );
}

export default Portfolio;
