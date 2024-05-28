import React, { useState, useContext } from 'react';
import ThemeContext from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/ThemeContext.js';

const CustomComponent = ({ backgroundColor, title, subtitle, description, tools, image, link }) => {
  const [hidden, setHidden] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    window.open(link, '_blank'); // Open link in a new tab
  };

  return ( 
    <div className='h-full px-4 sm:px-12 py-8'>
       <a href={link} className={`card-container ${hidden ? 'hidden' : ''} w-full cursor-pointer`} onClick={handleClick}>
      <div className={`${backgroundColor} flex-col rounded-2xl h-full py-4 border-8 border-black dark:border-white`}>
        <div className="flex flex-col md:flex-row w-full h-full px-4">
          <div className="w-full md:w-3/5 text-black dark:text-white py-10 px-2 sm:px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{title}</h2>
            <h3 className="text-md md:text-lg lg:text-2xl mt-2 font-bold">{subtitle}</h3>
            <p className="mt-8 text-lg">{description}</p>
            <div className="mt-12 md:w-4/5 md:items-start gap-2 items-center text-center grid grid-cols-2 sm:grid-cols-4">
              {tools}
            </div>
          </div>
          <div className="w-full  md:w-2/5 py-4 ">
            <img src={image} alt="Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </a>
    </div>
   
  );
};

export default CustomComponent;
