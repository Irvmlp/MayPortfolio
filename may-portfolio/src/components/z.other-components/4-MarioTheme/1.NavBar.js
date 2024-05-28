import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/za-other/foot/sider/mobileMenu.js';
import { ReactComponent as Logo } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/marioLogo.svg';


const Header = () => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("HOME"); // Default value is "Home"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <nav className="w-full fixed top-0">
      <div className="mt-8 flex justify-between items-center ml-32">
        <Link to="/cartoon" className="font-bold text-3xl text-white Comical px-6"> <Logo className='h-12'/></Link>

        <div className="w-2/5 py-2"></div>

        <div className="hidden flex flex-row mr-2 lg:flex font-bold mr-28 py-4 px-3 border-2 border-[white] SuperFont rounded-xl">
          <button className="w-2/3">
            <Link
              to="/cartoon"
              onClick={() => handleButtonClick("HOME")}
              className={`font-bold text-lg SuperFont px-8 py-3 text-black rounded-lg ${selectedButton === "HOME" ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              HOME
            </Link>
          </button>
          <button className="w-2/3">
            <Link
              to="/cartoonProjects"
              onClick={() => handleButtonClick("PROJECTS")} 
              className={`font-bold text-lg SuperFont px-8 py-3 text-black rounded-lg ${selectedButton === "PROJECTS"  ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              PROJECTS
            </Link>
          </button>
          <button>
            <Link
              to="/cartoonprojects"
              onClick={() => handleButtonClick("ABOUT")}
              className={`font-bold text-lg SuperFont px-8 py-3 text-black rounded-lg ${selectedButton === "ABOUT"  ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              ABOUT
            </Link>
          </button>
          <button className="">
            <Link
              to="/cartoonprojects"
              onClick={() => handleButtonClick("CONTACT")}
              className={`font-bold text-lg SuperFont px-8 py-3 text-black rounded-lg ${selectedButton === "CONTACT" ? "bg-[white] text-black": "text-white bg-transparent"} mr-2`}
            >
              CONTACT
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
