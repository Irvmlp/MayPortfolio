// Portfolio.js
import React from 'react';
import NavBar from '../components/secondComps/navBar2';
import NameContainer from '../components/secondComps/nameContainer';
import Projects from '../components/projectList'; // Import Projects component from the correct location
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/newnew.css';


function homie() {
  return (
    <div className='h-screen mainColor'> 
        <NavBar/>
        <div className='h-screen'>
           <NameContainer/>
        </div>
        <div className='h-screen'>
           <Projects/> {/* Render Projects component here */}
        </div>
        
    </div>
  );
}

export default homie;
