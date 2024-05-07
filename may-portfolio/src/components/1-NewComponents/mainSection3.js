// Header.js
import React, { useState, useEffect } from 'react';
import Picture from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/Irving_Portfolio_rain2.png';
import Info from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-NewComponents/Info.js';
import { ReactComponent as MySVG2 } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/svg2.svg';
import Project from './projectDropDown';
import Project1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/background1.png'; // Importing the PNG image
import Project2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/background1.png';
import Project3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/background1.png';
import Project4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/background1.png';
import Project5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/background1.png';

const Main = () => {
   
  return (
    <div className="h-max-content ">

      <div className='flex flex-col'>
      <Project title="Llamaedu.com" date="2024" description="This is a sample description." img={Project1} />
      <Project title="Finturo.com" date="2024" description="This is a sample description." img={Project1} />
      <Project title="Jamipainting.com" date="2024" description="This is a sample description." img={Project1} />
      <Project title="JourneyGenie.com" date="2024" description="This is a sample description." img={Project1} />
      <Project title="Llamaedu.com" date="2024" description="This is a sample description." img={Project1} />
   
    </div>
      </div>
  
  );
};

export default Main;




