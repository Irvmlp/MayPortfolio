// Assuming the file name is Tools.js
import React from 'react';

const Tools = ({ tooltitle, imgSrc }) => {
  return (
    <div className="tool py-2 px-2 rounded-lg bg-opacity-20 font-bold bg-gray-300 w-24">
      <h2>{tooltitle}</h2>
      <img src={imgSrc} />
    </div>
  );
}

export default Tools;
