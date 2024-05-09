import React from 'react';

const Dropdown = ({ title, date, description, section, isOpen, onClick }) => {
  const toggleDropdown = () => {
    onClick();
  };

  return (
    <div className="flex flex-col w-full mt-36">
      <div
        onClick={toggleDropdown}
        className={`flex ml-1 justify-between h-20 items-center py-4 ${isOpen ? 'bg-white text-black' : 'bg-transparent text-white'} text-2xl GtRegular rounded-xl border-2 border-gray-300 focus:bg-transparent`}
      >
        <div className='flex flex-col bg-transparent font-bold rounded-xl py-2 px-2 w-full'>

          <div className='flex flex-row'>
              <div className='w-1/5'>{title}</div>
          <div className="w-4/5 flex items-center justify-end ">
            <p className={`text-sm font-semibold ${isOpen ? 'text-black' : 'text-white'}`}>{date}</p>
          </div>
          </div>
        
          <div className="w-1/5 flex font-sm items-end">
            <p className={`text-${isOpen ? 'black' : 'white'}`}>{description}</p>
          </div>
       
       
       
        </div>
      </div>

      {isOpen && (
        <div className="fixed left-14 mt-24 justify-center overflow-y-scroll items-center w-11/12 h-4/6 bg-white border-2 border-gray-300 rounded-md shadow-lg">
          <div className="px-4">
            {section}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
