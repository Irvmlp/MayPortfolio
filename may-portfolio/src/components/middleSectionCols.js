import React from 'react';
import FirstCol from './firstCol';
import SecondCol from './secondCol';
import ThirdCol from './thirdCol';

const middleSectionColum = () => {
  return (
      
            <div className='flex flex-col h-full'>
                
                <FirstCol/>
               
                <SecondCol/>
              

                <ThirdCol/>
                
                
                </div>
  );
};

export default middleSectionColum;
