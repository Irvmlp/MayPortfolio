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
  const isProjectsPage = location.pathname === "/BlackProjects";
  const isHomePage = location.pathname === "/";
  
  return (
    <nav className="w-full h-24 text-gray-900 font-inter ">

      <div className="flex  items-center ">
     
      <Link to="/" className="font-bold text-4xl px-6" style={{ color: 'white', WebkitTextFillColor: 
      'black', WebkitTextStroke: '2px white' }}>IMLP.</Link>

      
      
        <div className="w-2/5 "></div>

        <div className="hidden flex-row  lg:flex font-bold px-3 border-2 border-[white] bg-gray-900 rounded-xl">
          <button className="w-2/3">
          <Link
            to="/"
            onClick={() => handleButtonClick("Home")}
            className={`font-bold text-l GtRegular px-8 py-2 rounded-lg ${selectedButton === "Home" ? "bg-white text-black" : "text-white bg-transparent"} mr-2 ${isHomePage ? 'text-black bg-white' : ''}`}
            style={{ color: isHomePage ? 'black' : 'white' }} // Change text color based on the Home page status
          >
            Home
          </Link>
          <Link
            to="/BlackProjects"
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
        
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="w-full mr-12  focus:text-gray-700 focus:outline-none">
            <svg className="bg-blue-500 h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>


      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="block  hover:text-red-700 focus:text-gray-700 focus:outline-none"></button>
      </div>



      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </nav>
  );
};

export default Header;
