// Portfolio.js
import React from 'react';
import NavBar from '../../components/1-Black-Portfolio/navBarBlack';
import NameContainer from '../../components/1-Black-Portfolio/nameContainer_Black';
import Projects from '../../components/1-Black-Portfolio/projectListBlack'; // Import Projects component from the correct location

import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/black.css';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';


function Black() {
  return (
    <div className="bg-[#111827]"> 
        <NavBar/>
        <div className='h-screen background-black'>
           <NameContainer/>
        </div>
        <div className='max-h-full bg-[#111827]  overflow-y-auto'>
           <Projects/> {/* Render Projects component here */}
        </div>

        <Footer/>
    </div>
  );
}

export default Black;
