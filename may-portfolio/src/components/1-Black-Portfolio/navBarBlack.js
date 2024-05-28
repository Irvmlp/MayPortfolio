import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/z.other-portfolio/sider/mobileMenu.js';
import ThemeContext from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/ThemeContext.js';
import ThemedLink from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/ThemedLink.js'; // Assuming ThemedLink component is defined in a separate file
import { ReactComponent as DarkBulb } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/darkBulb.svg';
import { ReactComponent as Lightbulb } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/lightbulb.svg';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/black.css';

const NavBar = () => {
  const {theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('/');
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const isAboutPage = location.pathname === '/About';
  const isProjectsPage = location.pathname === '/Projects';
  const isHomePage = location.pathname === '/';

  return (

    <nav className="w-full h-24 font-inter flex py-0 sm:py-16 flex-row ">
       <div className={`${theme === 'dark' ? 'dark' : ''}`}></div>
      
      <div className="w-full flex flex-row justify-start">
        <button className="text-right text-4xl px-6 ">
          <Link to="/" className="flex text-black dark:text-white justify-end align-center font-sans font-bold text-2xl sm:text-3xl md:text-4xl px-6 sm:ml-12">
            IMLP.
          </Link>
        </button>
        </div>
      <div className="hidden flex-row sm:flex font-bold bg-transparent px-3 rounded-xl mr-16">
      {isAboutPage && (
          <div className=''>
      <button onClick={toggleTheme}>
  <div class="toggle-button-cover-2 bg-transparent ">
      <div class="button-cover-2 ">
        <div class="button r2" id="button-3b">
          <input type="checkbox" class="checkbox-2" />
          <div class="knobs-2"></div>
          <div class="layer-2"></div>
        </div>
      </div>
    </div>
  </button>
          </div>
        )}
        {isProjectsPage && (
          <div className=''>
      <button onClick={toggleTheme}>
  <div class="toggle-button-cover-2 bg-transparent ">
      <div class="button-cover-2">
        <div class="button r2" id="button-3b">
          <input type="checkbox" class="checkbox-2" />
          <div class="knobs-2"></div>
          <div class="layer-2"></div>
        </div>
      </div>
    </div>
  </button>
          </div>
        )}
        
      <ThemedLink  to="/"  onClick={() => handleButtonClick('Home')}
      className={`font-bold text-l h-10 GtRegular px-6 py-2 rounded-lg mr-2 ${isHomePage ? 'selected' : ''}`}
      > Home </ThemedLink>

      <ThemedLink  to="/Projects"  onClick={() => handleButtonClick('Projects')}
      className={`font-bold text-l h-10 GtRegular px-6 py-2 rounded-lg mr-2 ${isProjectsPage ? 'selected' : ''}`}
      > Projects </ThemedLink>
        
      <ThemedLink  to="/About"  onClick={() => handleButtonClick('About')}
      className={`font-bold text-l h-10 GtRegular px-6 py-2 rounded-lg mr-2 ${isAboutPage ? 'selected' : ''}`}
      > About </ThemedLink>

      </div>

      <div className="sm:hidden w-full flex text-black dark:text-white justify-end">
      {isAboutPage && (
          <div className=''>
      <button onClick={toggleTheme}>
      <div class="toggle-button-cover-3 bg-transparent ">
      <div class="button-cover-3">
        <div class="button r3" id="button-3c">
          <input type="checkbox" class="checkbox-3" />
          <div class="knobs-3"></div>
          <div class="layer-3"></div>
        </div>
      </div>
    </div>
  </button>
          </div>
        )}
        {isProjectsPage && (
          <div className=''>
      <button onClick={toggleTheme}>
  <div class="toggle-button-cover-3 bg-transparent ">
      <div class="button-cover-3">
        <div class="button r3" id="button-3c">
          <input type="checkbox" class="checkbox-3" />
          <div class="knobs-3"></div>
          <div class="layer-3"></div>
        </div>
      </div>
    </div>
  </button>
          </div>
        )}

        <button onClick={toggleMobileMenu} className="text-right text-4xl px-6">
          <div className='-mt-10 h-2'> 
            _
          </div>
          <div className='h-2'> 
            _
          </div>
          <div className='h-2'> 
            _
          </div>
        </button>
      </div>
      
      

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      {/* Theme Toggle Button */}
    </nav>
  );
};

export default NavBar;
