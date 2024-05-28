// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './mobileMenu';
import Banner from './banner';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-10 bg-[#F5F5F5] backdrop-filter lg:py-4 mt-8 md:mt-0 text-gray-900 font-inter">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-3xl font-inter md:px-6">Irving Lamadrid</Link>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="block text-red-500 hover:text-red-700 focus:text-gray-700 focus:outline-none">
            <svg className="bg-red-500 h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden mr-4 lg:flex font-bold ">
        <button className="slider__navigation__button" data-slide-index="0">
            HOME
          </button>
          <button className="slider__navigation__button" data-slide-index="1">
           PROJECTS
          </button>
          <button className="slider__navigation__button" data-slide-index="2">
           ABOUT
          </button>  
       
          {/* Add more links as needed */}
        </div>
      
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      <hr className='bottom-line2'></hr>
      <Banner/>

    </nav>
  );
};

export default Header;
