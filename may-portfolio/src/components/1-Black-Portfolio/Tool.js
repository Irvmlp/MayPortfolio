// Tool.js
import React from 'react';

const Tool = ({ icon, text }) => {
  return (
    <div className="flex items-center h-14 bg-white opacity-90  rounded-lg px-4 py-2">
      <div className="mr-4 max-h-6 w-6 mb-2">{icon}</div> {/* Adjust the height and width here */}
      <div className="flex-grow text-gray-700 text-sm font-bold ">{text}</div>
    </div>
  );
};

export default Tool;
