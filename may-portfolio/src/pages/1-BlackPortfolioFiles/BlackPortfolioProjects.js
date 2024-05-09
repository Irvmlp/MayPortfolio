// Portfolio.js
import React from 'react';
import NavBar from '../../components/1-Black-Portfolio/navBarBlack'; // Import Projects component from the correct location

import AllProjects from '../../components/1-Black-Portfolio/AllProjects';


import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/black.css';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';

function Black() {

  return (
    <div className="bg-gray-900 w-full overflow-x-hidden"> 
        <NavBar/>
        <div className='h-screen overflow-y-scroll'>
              <AllProjects/>
        </div>
    
    </div>
  );
}

export default Black;
