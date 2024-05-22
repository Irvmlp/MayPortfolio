import React from 'react';


const Name = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
    
      <div className="w-full sm:w-2/3 py-24  flex px-12 justify-start">
     
      <div className='flex w-full flex-col  text-white'>
  
        <div className='w-full sm:ml-12'>       
        <h3 className='GtRegular text-2xl sm:text-4xl md:text-5xl'> Hi, i'm </h3>
        <h3 className='GtRegularBold text-3xl sm:text-4xl md:text-6xl'> Irving Lamadrid </h3>
        <h3 className='GtRegular text-2xl sm:text-4xl md:text-5xl'>I design and build products</h3>
        </div>


      <div className="w-full py-4 sm:ml-12 ">
             <button className='font-bold text-sm sm:text-xl bg-white  px-4 py-3 rounded-xl mr-4 text-black'> Projects </button>
             <button className='font-bold text-sm sm:text-xl bg-transparent border-2 border-[white]  text-[white] px-4 py-3 rounded-xl'> Contact </button>
        </div>
    </div>

      </div>


      <div className='bg-white text-black w-full sm:w-1/3'>
        lightbulb here
      </div>


   

</div>

  );
};

export default Name;
