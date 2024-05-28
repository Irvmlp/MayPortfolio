import React, { useContext } from 'react';
import NavBar from '../../components/1-Black-Portfolio/navBarBlack';
import NameContainer from '../../components/1-Black-Portfolio/about_components/nameContainer_Black';
import Projects from '../../components/1-Black-Portfolio/projectListBlack';
import ThemeContext from '../../ThemeContext';
import Footer from '../../components/1-Black-Portfolio/NewFooter';

function Black() {
 

  return (
    <div className={`bg-[#2C363D] w-full h-full `}>
      <div className="bg-[#ECD8AE] dark:bg-[#2C363D] min-h-screen transition-colors duration-300">
        <NavBar />
        <NameContainer />
        
      </div>

      <div className="bg-[#ECD8AE] dark:bg-[#2C363D] min-h-screen transition-colors duration-300 w-full h-full">
        <Projects />
      </div>
    </div>
  );
}

export default Black;
