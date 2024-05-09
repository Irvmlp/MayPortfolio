// Portfolio.js
import React from 'react';
import NavBar from '../../components/3-CartoonPortfolio/1.CartoonNavBar';
import NameContainer from '../../components/3-CartoonPortfolio/2.nameContainer';
import Projects from '../../components/3-CartoonPortfolio/3.HomeProjects'; // Import Projects component from the correct location

import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/3-CartoonPortfolio/cartoon.css';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';


function Black() {
  return (
    <div className="body3"> 
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
