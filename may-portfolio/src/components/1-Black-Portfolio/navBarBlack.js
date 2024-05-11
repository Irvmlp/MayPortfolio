import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/za-other/foot/sider/mobileMenu.js';

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
    <nav className="w-full text-gray-900 font-inter fixed top-0  ">
      <div className="mt-8 flex justify-between items-center ml-32">
        <Link to="/Black" className="font-bold text-3xl text-white font-inter px-6">IMLP.</Link>

        <div className="w-2/5 py-2"></div>

        <div className="hidden flex flex-row mr-2 lg:flex font-bold mr-28 py-4 px-3 border-2 border-[white] bg-gray-900 rounded-xl">
          <button className="w-2/3">
            <Link
              to="/Black"
              onClick={() => handleButtonClick("Home")}
              className={`font-bold text-l GtRegular px-8 py-3 text-black rounded-lg ${selectedButton === "Home" ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              Home
            </Link>
          </button>
          <button className="w-2/3">
            <Link
              to="/BlackProjects"
              onClick={() => handleButtonClick("Projects")} 
              className={`font-bold text-l GtRegular px-8 py-3 text-black rounded-lg ${selectedButton === "Projects"  ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              Projects
            </Link>
          </button>
          <button>
            <Link
              to="/About"
              onClick={() => handleButtonClick("About")}
              className={`font-bold text-l GtRegular px-8 py-3 text-black rounded-lg ${selectedButton === "About"  ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              About
            </Link>
          </button>
          <button className="">
            <Link
              to="/"
              onClick={() => handleButtonClick("Contact")}
              className={`font-bold text-l GtRegular px-8 py-3 text-black rounded-lg ${selectedButton === "Contact" ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              Contact
            </Link>
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="block text-red-500 hover:text-red-700 focus:text-gray-700 focus:outline-none">
            <svg className="bg-red-500 h-6 w-6 fill-current" viewBox="0 0 24 24">
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
