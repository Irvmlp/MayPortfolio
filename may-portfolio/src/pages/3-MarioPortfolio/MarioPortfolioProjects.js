// Portfolio.js
import React from 'react';
import NavBar from '../../components/4-MarioTheme/1.NavBar';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';


import AllProjects from '../../components/4-MarioTheme/4.AllProjects';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/4-MarioTheme/current.css';


function Black() {

  return (
    <div className="bg-gray-900 w-full overflow-x-hidden"> 
        <NavBar/>
        <div className='h-screen overflow-y-hidden'>
      
              <AllProjects/>

        </div>
    
    </div>
  );
}

export default Black;
