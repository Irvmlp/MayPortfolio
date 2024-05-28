// Portfolio.js
import React, { useState, useContext } from 'react';
import NavBar from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/navBarBlack.js'; // Import Projects component from the correct location
import AllProjects from '../../components/1-Black-Portfolio/AllProjects';


import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/black.css';

function Black() {

  return (
    <div className="bg-[#ECD8AE] dark:bg-[#2C363D] transition-colors duration-300 w-full overflow-x-hidden"> 
        <NavBar/>
        <div className='h-screen overflow-y-scroll'>
              <AllProjects/>
        </div>
    
    </div>
  );
}

export default Black;
