// Portfolio.js
import React from 'react';
import NavBar from '../components/3-Black-Portfolio/navBarBlack';
import NameContainer from '../components/3-Black-Portfolio/nameContainer_Black';
import AboutSection from '../components/3-Black-Portfolio/AboutSection';
import Projects from '../components/3-Black-Portfolio/projectListBlack'; // Import Projects component from the correct location

import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/3-Black-Portfolio/black.css';
import Footer from '../components/2-LooseLeaf-Portfolio/NewFooter';


function Black() {
  return (
    <div className="background-black"> 
        <NavBar/>
        <div className='h-screen background-black'>
           <NameContainer/>
        </div>
        <div className='max-h-full  overflow-y-auto'>
           <Projects/> {/* Render Projects component here */}
        </div>

        <div className='h-full'>
           <AboutSection/> {/* Render Projects component here */}
        </div>
        <Footer/>
    </div>
  );
}

export default Black;
