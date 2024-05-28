// StickyCollection.js
import React from 'react';
import StickyNote from './stickyNote'; // Assuming you have a StickyNote component
import './stickynotes.css'; // Assuming you have a CSS file for styling

const StickyCollection = () => {
  return (
    <div className="sticky-collection">
     
      <div className="flex flex-row gap-4 sticky-notes">
        <StickyNote title="llamaedu.com" description="design startup" />
        <StickyNote title="Note 2" description="Description for Note 2" />
        <StickyNote title="Note 3" description="Description for Note 3" />
        <StickyNote title="Note 4" description="Description for Note 4" />
        <StickyNote title="Note 5" description="Description for Note 5" />
      </div>
    </div>
  );
};

export default StickyCollection;
