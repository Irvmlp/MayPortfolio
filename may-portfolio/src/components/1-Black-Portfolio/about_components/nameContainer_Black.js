import React from 'react';
import BioInfo from './nameInfoBlack'; 
import GameComponent from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/dice.js'; // Adjust the path as needed


const Name = () => {
  return (
    <div className='flex flex-col md:flex-row'>
    
      <div className="w-full md:w-2/3 flex justify-center md:ml-24 md:justify-start">
        <BioInfo/>
      </div>
      <div className="w-full md:w-1/3 flex bottom-0">
  <div className='game-container'> 
  <GameComponent />
  </div>   
</div>



    </div>
  );
};

export default Name;
