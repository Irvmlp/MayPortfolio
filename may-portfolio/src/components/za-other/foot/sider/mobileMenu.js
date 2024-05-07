// MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center justify-center h-full">
        <Link to="/real" className="text-gray-800 py-2">Home</Link>
        <Link to="/about" className="text-gray-800 py-2">About</Link>
        <Link to="/project" className="text-gray-800 py-2">Portfolio</Link>
        <Link to="/blog" className="text-gray-800 py-2">Blog</Link>
        {/* Add more links as needed */}
        <button onClick={onClose} className="bg-red-400 absolute top-0 right-0 mt-4 mr-4 text-red-800">
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path d="M6 18L18 6M6 6l12 12"></path>
  </svg>
</button>

      </div>
    </div>
  );
};

export default MobileMenu;
