// Portfolio.js
import React from 'react';
import NavBar from '../../components/2-LooseLeaf-Portfolio/navBar2';
import NameContainer from '../../components/2-LooseLeaf-Portfolio/ProjectTitle';

import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/2-LooseLeaf-Portfolio/loose.css';
import Footer from '../../components/2-LooseLeaf-Portfolio/NewFooter';
import AllProjects from '../../components/2-LooseLeaf-Portfolio/AllProjectsLoose';

function loose() {
  return (
    <div className='h-screen body-erase'> 
        <NavBar/>
        <div className='h-screen overflow-y-scroll'>
      <AllProjects/>
</div> 

    </div>
  );
}
 
export default loose;
