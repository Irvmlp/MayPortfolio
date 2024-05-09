// Portfolio.js
import React from 'react';
import NavBar from '../../components/4-MarioTheme/1.NavBar';
import NameContainer from '../../components/4-MarioTheme/2.nameContainer';
import Projects from '../../components/4-MarioTheme/3.HomeProjects'; // Import Projects component from the correct location

import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/4-MarioTheme/current.css';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';


function Black() {
  return (
    <div className="body4"> 
        <NavBar/>
        <div className='h-screen background-black'>
           <NameContainer/>
        </div>
        <div className='max-h-full  overflow-y-auto'>
           <Projects/> {/* Render Projects component here */}
        </div>

        <Footer/>
    </div>
  );
}

export default Black;
