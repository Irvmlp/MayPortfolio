import React from 'react';

const Dropdown = ({ title, date, description, section, isOpen, onClick }) => {
  const toggleDropdown = () => {
    onClick();
  };

  return (
    <div className="flex flex-col w-full mt-36">
      <div
        onClick={toggleDropdown}
        className={`flex ml-1 justify-between h-20 items-center py-4 ${isOpen ? 'bg-orange-400 text-black' : 'bg-transparent text-black'} text-2xl GtRegular rounded-2xl border-2 border-orange-300 focus:bg-transparent`}
      >
        <div className='flex flex-col bg-transparent font-bold rounded-xl py-2 px-2 w-full'>

          <div className='flex flex-row w-4/5 md:w-11/12'>
              <div className='w-1/6'>{title}</div>
          <div className="w-4/5 flex items-center justify-end ">
            <p className={`text-sm font-semibold ${isOpen ? 'text-black' : 'text-black'}`}>{date}</p>
          </div>
          </div>
        
          <div className="w-full md:w-3/5 flex font-sm items-end text-black">
            <p>{description}</p>
          </div>
       
        </div>
      </div>

      {isOpen && (
        <div className="fixed left-14 mt-24 justify-center overflow-y-scroll items-center rounded-xl w-4/5 md:w-11/12 h-4/6 bg-white border-2 border-orange-300 shadow-lg">
          <div className="px-4">
            {section}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
