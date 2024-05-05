import React from 'react';
import MiddleSection from './middle-middleSection';

const middleSection = () => {
  return (
        <div className="h-screen">

            <div className='flex flex-col h-full'>
                <div className='h-1/3 md:h-1/6'> </div> {/* first  */}

                <div className='h-4/5 mb-1 flex flex-col md:flex-row'>  {/* second  */}
                 <div className="w-full md:w-1/4 custom-border-right">
                   <p className="md:text-[200px] text-6xl font-bold LipoItalic">1 </p>
                 </div>

                 <div className="w-full md:w-1/2 custom-border-right">
                  <MiddleSection/>
                 </div>

                  <div className="w-full md:w-1/2 bg-black"> {/* third */}
                  </div>
                </div>



                <div className='h-1/2 md:h-1/4'> </div>
            </div>
    </div>
  );
};

export default middleSection;
