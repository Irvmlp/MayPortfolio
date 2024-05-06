// Portfolio.js
import React from 'react';
import Header from '../components/header/foot/sider/header';
import CoolFooter from '../components/header/foot/sider/Footer';
import MiddleSection from '../components/aboutBranch/1-aboutSection';

function about() {
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

export default about;
