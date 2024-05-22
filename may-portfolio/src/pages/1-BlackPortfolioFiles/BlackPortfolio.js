// Portfolio.js
import React from 'react';
import NavBar from '../../components/1-Black-Portfolio/navBarBlack';
import NameContainer from '../../components/1-Black-Portfolio/about_components/nameContainer_Black';
import Projects from '../../components/1-Black-Portfolio/projectListBlack'; // Import Projects component from the correct location

import Footer from '../../components/1-Black-Portfolio/NewFooter';


function Black() {
  return (
    <div className="bg-[#111827] w-full h-screen"> 
        <NavBar/>
        <NameContainer/>
    </div>
  );
}

export default Black;
