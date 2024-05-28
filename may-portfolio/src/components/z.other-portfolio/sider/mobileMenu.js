// MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed z-50 w-full h-screen bg-gray-900  ${isOpen ? 'block' : 'hidden'}`}>

      <div className="flex flex-col items-center justify-center h-full">

        <Link to="/" className="text-white text-7xl py-2">Home</Link>
        <Link to="/about" className="text-white text-7xl py-2">About</Link>
        <Link to="/Projects" className="text-white text-7xl py-2">Projects</Link>
        {/* Add more links as needed */}
        <button onClick={onClose} className=" absolute top-0 text-8xl right-0 mt-4 mr-12 text-red-800">
          x
</button>
 
      </div>
    </div>
  );
};

export default MobileMenu;
