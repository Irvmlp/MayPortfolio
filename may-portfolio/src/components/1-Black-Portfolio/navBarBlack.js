import React, { useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import MobileMenu from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/za-other/foot/sider/mobileMenu.js';

const Header = () => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("/"); // Default value is "Home"
  const location = useLocation(); // Get the current location using useLocation hook

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  }; 
  const isAboutPage = location.pathname === "/About";
  const isProjectsPage = location.pathname === "/Projects";
  const isHomePage = location.pathname === "/";
  
  return (
    <nav className="w-full h-24 text-gray-900  font-inter flex py-16 flex-row">
      
      <div className="w-full flex justify-start ">
    <button className="text-right text-4xl px-6">
    <Link to="/" className=" flex justify-end align-center font-sans font-bold text-white text-2xl sm:text-3xl md:text-4xl px-6 sm:ml-12">IMLP.</Link>
    </button>
    </div>

    <div className="hidden flex-row sm:flex font-bold px-3  rounded-xl">
          <button className="w-full">
         
          <Link to="/" onClick={() => handleButtonClick("Home")} className={`font-bold text-l GtRegular 
          px-8 py-2 rounded-lg ${selectedButton === "Home" ? "bg-white text-black" 
          : "text-white bg-transparent"} mr-2 ${isHomePage ? 'text-black bg-white' : ''}`}
            style={{ color: isHomePage ? 'black' : 'white' }} // Change text color based on the Home page status
          > Home  
          </Link>
          
          <Link
            to="/Projects"
            onClick={() => handleButtonClick("Projects")}
            className={`font-bold text-l GtRegular px-8 py-2 rounded-lg ${selectedButton === "Projects" ? "bg-white text-black" : "text-white bg-transparent"} mr-2 ${isProjectsPage ? 'text-black bg-white' : ''}`} // Apply conditional styles for the Projects link
            style={{ color: isProjectsPage ? 'black' : 'white' }} // Change text color based on the Projects page status
          >
            Projects
          </Link>

          <Link
            to="/About"
            onClick={() => handleButtonClick("About")}
            className={`font-bold text-l GtRegular px-8 py-2 rounded-lg ${selectedButton === "About" ? "bg-white text-black" : "text-white bg-transparent"} mr-2 ${isAboutPage ? 'text-black bg-white' : ''}`} // Apply conditional styles for the About link
            style={{ color: isAboutPage ? 'black' : 'white' }} // Change text color based on the About page status
          >
            About
          </Link>
          </button>
        </div>




      <div className="sm:hidden w-full flex text-white justify-end ">
    <button onClick={toggleMobileMenu} className="text-right text-4xl px-6">
        ----
    </button>
    </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

    </nav>
  );
};

export default Header;
