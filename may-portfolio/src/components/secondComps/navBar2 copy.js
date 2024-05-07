import React from 'react';
import NavBarComps from './NavBarComps';

const NavBar = () => {
  return (
        <div className=" py-2">
        <div className='flex flex-row mt-16'>
          <div className='w-2/5 ml-10'>
            IMLP
          </div>
          <div className='w-3/4'>
            
          </div>
          <div className='w-1/3'>
            <NavBarComps/>
          </div>
          <div className='w-1/4'>
           
          </div>
        </div>

    </div>
  );
};

export default NavBar;
