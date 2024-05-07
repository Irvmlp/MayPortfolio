import React from 'react';
import Tools from './Tools'; // Assuming the file name is Tools.js

const HomePage = () => {
  // Define an array of 10 tools
  const toolsList = [
    { title: 'Tool 1', imgSrc: 'tool1.jpg' },
    { title: 'Tool 2', imgSrc: 'tool2.jpg' },
    { title: 'Tool 3', imgSrc: 'tool3.jpg' },
    { title: 'Tool 4', imgSrc: 'tool4.jpg' },
    { title: 'Tool 5', imgSrc: 'tool5.jpg' },
    { title: 'Tool 6', imgSrc: 'tool6.jpg' },
    { title: 'Tool 7', imgSrc: 'tool7.jpg' },
    { title: 'Tool 8', imgSrc: 'tool8.jpg' },
    { title: 'Tool 9', imgSrc: 'tool9.jpg' },
    { title: 'Tool 10', imgSrc: 'tool10.jpg' }
  ];

  return (
    <div>
      {/* Render tools tagged to different places */}
      <div className="place-1">
        <Tools title={toolsList[1].title} imgSrc={toolsList[1].imgSrc} />
        <Tools title={toolsList[3].title} imgSrc={toolsList[3].imgSrc} />
      </div>
      <div className="place-2">
        <Tools title={toolsList[2].title} imgSrc={toolsList[2].imgSrc} />
        <Tools title={toolsList[3].title} imgSrc={toolsList[3].imgSrc} />
      </div>
      {/* Add more divs with different combinations of tools as needed */}
    </div>
  );
}

export default HomePage;
