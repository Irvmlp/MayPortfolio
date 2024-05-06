// Portfolio.js
import React from 'react';
import Header from '../components/header';
import CoolFooter from '../components/nameFooter';
import MiddleSection from '../components/middleSection';

function Portfolio() {
  return (
    <div> 
        <Header/>
      <section>
        <div className='w-full bg-[#F2EFF1]'>
                <MiddleSection/>   
        </div>
        <CoolFooter/>
      </section>
    
    </div>
  );
}

export default Portfolio;
