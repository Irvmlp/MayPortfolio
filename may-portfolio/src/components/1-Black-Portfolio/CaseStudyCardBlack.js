import React, { useState } from 'react';

const CustomComponent = ({ backgroundColor, title, subtitle, description, tools, image }) => {
  
  
  
  const [hidden, setHidden] = useState(false);

  return ( 
    <div className={`card-container ${hidden ? 'hidden' : ''} h-screen py-28 px-20 w-full cursor-pointer`}>
      <div className={`${backgroundColor} flex-col rounded-2xl h-full py-10 border-2 border-white`}>
        
        <div className="flex flex-col md:flex-row w-full h-full px-4">
          <div className="w-full md:w-3/5 p-4 text-white py-10 px-10">
            <h2 className="text-7xl font-bold">{title}</h2>
            <h3 className="text-l mt-2 font-bold">{subtitle}</h3>
            <p className="mt-8 text-2xl">{description}</p>
            <div className="mt-24 px-4 gap-4 flex text-center md:flex-row flex-col">
              {tools}
            </div>
          </div>
          <div className="w-full  md:w-2/5 p-4">
            <img src={image} alt="Image" className="mt-8 w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
