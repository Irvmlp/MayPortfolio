import React, { useState } from 'react';


const Dropdown = ({ title, date, description,img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
    
    
     <div
        onClick={toggleDropdown}
        className="px-8 flex justify-between items-center py-4 bg-gray-200 text-gray-800 text-2xl GtRegular w-full rounded-md focus:outline-none border-b-2 border-zinc-900 focus:bg-gray-400"
      >
        <div>{title}</div>
        <div className="flex  items-end">
          <p className="text-sm font-semibold text-gray-800">{date}</p>
        </div>
        <div className="flex items-end">
           <p className="text-gray-600">{description}</p>
        </div>
      </div>


      {isOpen && (
        <div className=" top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="px-4 bg-black h-24 py-2 overflow-hidden">
          <img className= "image-cover" src={img} alt="Description of the image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
