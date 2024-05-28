import React, { useState } from 'react';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/lightbulb.css'; // Ensure this file contains the required CSS
import ThemeToggle from './toggleDark.js';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Hello, World!</h1>
        <p>This is a sample paragraph to demonstrate light and dark mode.</p>
      </div>
    </div>
    </div>
  );
};

export default ToggleSwitch;
