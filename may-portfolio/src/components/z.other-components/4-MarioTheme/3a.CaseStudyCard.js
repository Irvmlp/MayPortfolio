import React, { useState } from 'react';
import llamaPic from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/gallery/llamaPic.png';

const CustomComponent = ({ backgroundColor, title, subtitle, description, tools, image }) => {
  const [hidden, setHidden] = useState(false);

  return ( 
    <div className={`card-container ${hidden ? 'hidden' : ''} h-screen py-28 px-20 w-full`}>
      <div className={`${backgroundColor} flex-col rounded-2xl h-full py-10 border-2 bg-[#43B047] border-[#43B047]`}>
        
        <div className="flex flex-col md:flex-row w-full h-full px-4  ">
          <div className="w-full md:w-3/5 p-4 text-white py-10 px-10">
            <h2 className="text-7xl font-bold SuperFont text-with-shadow">{title}</h2>
            <h3 className="text-2xl mt-2 font-bold SuperFont text-with-shadow">{subtitle}</h3>
            <p className="mt-8 text-2xl SuperFont text-with-shadow">{description}</p>
            <div className="mt-24 SuperFont px-4 gap-4 flex text-center md:flex-row flex-col">
              {tools}
            </div>
          </div>
          <div className="w-full md:w-2/5 p-4 ">
            <img src={llamaPic} alt="Image" className="mr-4 mt-8 w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
