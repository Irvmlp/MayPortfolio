// StickyNote.js

import React from 'react';
import './stickynotes.css'; // Assuming you have a CSS file for styling

const StickyNote = ({ title, description }) => {
  return (
    <div className="post-it">
      <h3 className="text-xl GtRegularBold mt-12">{title}</h3>
      <p className="GtRegular">{description}</p>
    </div>
  );
};

export default StickyNote;
