// Portfolio.js
import React from 'react';
import NavBar from '../../components/1-Black-Portfolio/navBarBlack';
import AboutContainer from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/AboutContainer.js';
import IamContainer from '../../components/1-Black-Portfolio/about_components/IamContainer';
import Experience from '../../components/1-Black-Portfolio/about_components/Experience';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/black.css';
import Footer from '../../components/1-Black-Portfolio/NewFooter';


function Black() {
  return (
    <div className="bg-[#111827]"> 
        <NavBar/>
        <div className='h-screen background-black'>
           <AboutContainer/>
        </div>
        <div className='h-screen background-black'>
           <IamContainer/>
        </div>
        <div className='h-screen background-black'>
           <Experience/>
        </div>
        

        <Footer/>
    </div>
  );
}

export default Black;
