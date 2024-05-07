import React, { useState } from 'react';

const NavBarComps = () => {
  const [selectedTab, setSelectedTab] = useState('Home'); // Default selected tab is 'Home'

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="h-full px-4 py-2">
      <div className='flex flex-row rounded-xl bg-white px-4 py-4'>
        <div
          onClick={() => handleClick('Home')}
          className={`mr-2 px-6 py-3 text-center text-white rounded-xl ${selectedTab === 'Home' ? 'bg-blue-200 text-blue-900' : 'bg-transparent text-blue-200 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'}`}
        >
          Home
        </div>
        <div
          onClick={() => handleClick('About')}
          className={`mr-2 px-6 py-3 text-center text-white rounded-xl ${selectedTab === 'About' ? 'bg-blue-200 text-blue-900' : 'bg-transparent text-blue-200 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'}`}
        >
          About
        </div>
        <div
          onClick={() => handleClick('Work')}
          className={`mr-2 px-6 py-3 text-center text-white rounded-xl ${selectedTab === 'Work' ? 'bg-blue-200 text-blue-900' : 'bg-transparent text-blue-200 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'}`}
        >
          Work
        </div>
        <div
          onClick={() => handleClick('Contact')}
          className={`px-6 py-3 text-center text-white rounded-xl ${selectedTab === 'Contact' ? 'bg-blue-200 text-blue-900' : 'bg-transparent text-blue-200 hover:bg-blue-200 hover:text-blue-900 cursor-pointer'}`}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default NavBarComps;
