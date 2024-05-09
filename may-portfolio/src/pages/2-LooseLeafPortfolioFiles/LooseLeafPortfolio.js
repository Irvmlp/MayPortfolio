// Portfolio.js
import React from 'react';
import NavBar from '../../components/2-LooseLeaf-Portfolio/navBar2';
import NameContainer from '../../components/2-LooseLeaf-Portfolio/nameContainer';
import AboutSection from '../../components/2-LooseLeaf-Portfolio/AboutSection';
import Projects from '../../components/2-LooseLeaf-Portfolio/projectList'; // Import Projects component from the correct location

import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/2-LooseLeaf-Portfolio/loose.css';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';


function loose() {
  return (
    <div className='h-screen body-erase'> 
        <NavBar/>
        <div className='h-screen'>
           <NameContainer/>
        </div>
        <div className='max-h-full  overflow-y-auto'>
           <Projects/> {/* Render Projects component here */}
        </div>

        <Footer/>
    </div>
  );
}

export default loose;
