// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/za-other/foot/sider/mobileMenu.js';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" top-0 w-full z-10 bg-[#F5F5F5] md:mt-0 text-gray-900 font-inter">
      <div>
      <div className="flex justify-between items-center m-2 ">
        <Link to="/" className="font-bold text-3xl font-inter px-6">Irving Lamadrid</Link>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="block text-red-500 hover:text-red-700 focus:text-gray-700 focus:outline-none">
            <svg className="bg-red-500 h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden mr-2 lg:flex font-bold ">
        <button className="slider__navigation__button" data-slide-index="0">
        <Link to="/" className="font-bold text-xl GtRegular px-6">Project</Link>
          </button>
          <button className="slider__navigation__button" data-slide-index="1">
          <Link to="about" className="font-bold text-xl GtRegular px-6">About</Link>
          </button>
          <button className="slider__navigation__button" data-slide-index="2">
          <Link to="/" className="font-bold text-xl GtRegular px-6">Contact</Link>
          </button>  
          </div>

          

        </div>
        <hr className='bottom-line2'></hr>

        <div className="flex justify-between items-center m-2">
        <h2 to="/" className="font-bold text-xl md:text-2xl gray-300 font-inter px-6"> Product Designer</h2>
        
        
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="block text-red-500 hover:text-red-700 focus:text-gray-700 focus:outline-none">
        
          <div className="text-sm md:text-lg">
           Contact me
          </div>  
          </button>
        </div>
        

        <div className="gap-4 mr-4 hidden md:mr-12 lg:flex font-bold GtRegular text-gray-900 ">
          <div className="" >
           Bounjour
          </div>
          En
          </div>

        </div>


      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      <hr className='bottom-line2'></hr>
     

    </nav>
  );
};

export default Header;
