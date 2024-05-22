import React, { useState } from 'react';

const CustomComponent = ({ backgroundColor, title, subtitle, description, tools, image, link }) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    window.open(link, '_blank'); // Open link in a new tab
  };

  return ( 
    <div className='h-screen py-28 px-20'>
       <a href={link} className={`card-container ${hidden ? 'hidden' : ''} w-full cursor-pointer`} onClick={handleClick}>
      <div className={`${backgroundColor} flex-col rounded-2xl h-full py-10 border-2 border-white`}>
        <div className="flex flex-col md:flex-row w-full h-full px-4">
          <div className="w-full md:w-3/5 p-4 text-white py-10 px-10">
            <h2 className="text-7xl font-bold">{title}</h2>
            <h3 className="text-l mt-2 font-bold">{subtitle}</h3>
            <p className="mt-8 text-xl">{description}</p>
            <div className="-ml-4 mt-20 px-4 gap-4 flex text-center md:flex-row flex-col">
              {tools}
            </div>
          </div>
          <div className="w-full  md:w-2/5 p-4">
            <img src={image} alt="Image" className="mt-8 w-full h-auto" />
          </div>
        </div>
      </div>
    </a>
    </div>
   
  );
};

export default CustomComponent;
