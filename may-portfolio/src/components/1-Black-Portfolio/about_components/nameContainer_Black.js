import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/ThemeContext.js';
import { ReactComponent as DarkBulb } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/darkBulb.svg';
import { ReactComponent as Lightbulb } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/lightbulb.svg';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/black.css';

const Name = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    window.open('https://www.linkedin.com/in/irvingmlp'); // Open link in a new tab
  };
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
    <div className='flex flex-col sm:flex-row'>
    
      <div className="w-full sm:w-2/3 py-12   sm:py-32 md:py-40 flex px-12 justify-start order-2 md:order-1">
     
      <div className='flex w-full flex-col mt-36 sm:mt-0  text-black dark:text-white '>
        <div className='w-full text-center md:text-left sm:ml-12'>       
        <h3 className='GtRegular text-3xl sm:text-4xl md:text-5xl lg:text-6xl'> Hi, i'm </h3>
        <h3 className='GtRegularBold text-4xl sm:text-4xl md:text-6xl lg:text-8xl'> Irving Lamadrid </h3>
        <h3 className='GtRegular text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>I craft, code, and innovate</h3>
        </div>

        <div className="w-full py-4 flex mt-4 justify-center mr-4 md:justify-start sm:ml-12">
        <button
  className="font-bold text-sm sm:text-xl md:text-2xl bg-transparent mr-4 border-2 dark:border-white border-black text-black dark:text-white px-4 py-3 rounded-xl"
  onClick={handleClick}
>
  <a href="https://www.linkedin.com/in/irvingmlp" target="https://www.linkedin.com/in/irvingmlp" rel="noopener noreferrer">
    Contact</a>
</button>
<button className='font-bold text-sm sm:text-xl md:text-2xl px-4 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black'>  
    <Link to="/Projects"> Projects </Link>
  </button>

 

</div>

    </div>

      </div>

      <div className='flex items-center justify-center text-black w-full py-4 md:py-32 px-12 sm:px-24 sm:w-1/3 order-1 md:order-2'>
  <Lightbulb className='h-48 sm:h-72 md:mb-12 w-auto absolute dark:hidden'/>
  <DarkBulb className='h-48 sm:h-72 md:mb-12 w-auto absolute hidden dark:flex'/>
  

<button onClick={toggleTheme}>
  <div class="toggle-button-cover ">
      <div class="button-cover">
        <div class="button r" id="button-3">
          <input type="checkbox" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
    </div>
  </button>
  
 
</div>
 </div>


   

</div>

  );
};

export default Name;
