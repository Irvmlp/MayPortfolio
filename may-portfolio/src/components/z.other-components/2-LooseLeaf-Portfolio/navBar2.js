import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/za-other/foot/sider/mobileMenu.js';
import NavBarComps from './NavBarComps';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Home"); // Default value is "Home"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <nav className="w-5/6 sm:w-11/12 md:w-full text-gray-900 font-inter fixed top-0 z-50 ">
      <div className="mt-8 flex justify-between items-center ml-32">
        <Link to="/" className="font-bold text-3xl font-inter px-6">IMLP.</Link>
        <div className="w-2/5 py-2"></div>

        <div className="hidden flex flex-row lg:flex font-bold mr-28 py-4 px-3 border-2 border-[#FF9A00] bg-white rounded-xl">
          <button className="w-2/3">
            <Link
              to="/"
              onClick={() => handleButtonClick("Home")}
              className={`font-bold text-l GtRegular px-8 py-3 rounded-lg ${selectedButton === "Home" ? "bg-[#FF9A00]" : "bg-transparent"} mr-2`}
            >
              Home
            </Link>
          </button>
          <button className="w-2/3">
            <Link
              to="/looseProjects"
              onClick={() => handleButtonClick("Projects")} 
              className={`font-bold text-l GtRegular px-8 py-3 rounded-lg ${selectedButton === "Projects" ? "bg-[#FF9A00]" : "bg-transparent"} mr-2`}
            >
              Projects
            </Link>
          </button>
          <button>
            <Link
              to="about"
              onClick={() => handleButtonClick("About")}
              className={`font-bold text-l GtRegular px-8 py-3 rounded-lg ${selectedButton === "About" ? "bg-b[#FF9A00]" : "bg-transparent"} mr-2`}
            >
              About
            </Link>
          </button>
          <button className="">
            <Link
              to="/"
              onClick={() => handleButtonClick("Contact")}
              className={`font-bold text-l GtRegular px-8 py-3 rounded-lg ${selectedButton === "Contact" ? "bg-[#FF9A00]" : "bg-transparent"} mr-2`}
            >
              Contact
            </Link>
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="block text-red-500 hover:text-red-700 focus:text-gray-700 focus:outline-none">
            <svg className="bg-red-500 h-6 w-6 fill-current" viewBox="0 0 10 10">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="block text-red-500 hover:text-red-700 focus:text-gray-700 focus:outline-none"></button>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </nav>
  );
};

export default Header;
