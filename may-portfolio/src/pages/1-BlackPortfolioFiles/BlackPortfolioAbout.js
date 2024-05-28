// Portfolio.js
import React, { useContext } from 'react';
import NavBar from '../../components/1-Black-Portfolio/navBarBlack';
import AboutContainer from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/about_components/AboutContainer.js';
import IamContainer from '../../components/1-Black-Portfolio/about_components/IamContainer';
import Experience from '../../components/1-Black-Portfolio/about_components/Experience';
import Footer from '../../components/1-Black-Portfolio/NewFooter';


function Black() {
  return (
    <div className="bg-[#ECD8AE] dark:bg-[#2C363D] "> 
        <NavBar/>
        <div className='h-screen w-auto background-black'>
           <AboutContainer/>
        </div>
        <div className='h-full -mt-40 w-auto background-black'>
           <IamContainer/>
        </div>
        <div className='h-24 w-auto background-black'>
          
        </div>
    </div>
  );
}

export default Black;
