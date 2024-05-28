import React, { useState, useContext } from 'react';
import ThemeContext from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/ThemeContext.js';


const Tool = ({ icon, text }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex  h-14 dark:bg-white bg-black opacity-90 items-center justify-center md:justify-start text-center rounded-lg px-4 py-2">
      <div className="mr-4 md:mr-2 max-h-6 mb-2 ">{icon}</div> {/* Adjust the height and width here */}
      <div className="text-white dark:text-black text-xs md:text-sm font-bold ">{text}</div>
    </div>
  );
};

export default Tool;
