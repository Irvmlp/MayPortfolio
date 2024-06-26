import React, { useEffect } from 'react';
import './dice.css';

const GameComponent = () => {
  useEffect(() => {
    const rollDice = () => {
      const elDiceOne = document.getElementById('dice1');
     
      const diceRoll = () => Math.floor((Math.random() * 6) + 1);

      const animateDice = (elDice, diceValue) => {
        for (let i = 1; i <= 6; i++) {
          elDice.classList.remove(`show-${i}`);
          if (diceValue === i) {
            elDice.classList.add(`show-${i}`);
          }
        }
      };

      const diceOne = diceRoll();

      animateDice(elDiceOne, diceOne);
    };

    const elComeOut = document.getElementById('roll');
    elComeOut.onclick = () => {
      rollDice();
    };
  }, []);

  return (
    <div className="game">
      <div className="container">
        <div id="dice1" className="dice dice-one">
          <div id="dice-one-side-one" className="side one">
            <div className="dot one-1"></div>
          </div>
          <div id="dice-one-side-two" className="side two">
            <div className="dot two-1"></div>
            <div className="dot two-2"></div>
          </div>
          <div id="dice-one-side-three" className="side three">
            <div className="dot three-1"></div>
            <div className="dot three-2"></div>
            <div className="dot three-3"></div>
          </div>
          <div id="dice-one-side-four" className="side four">
            <div className="dot four-1"></div>
            <div className="dot four-2"></div>
            <div className="dot four-3"></div>
            <div className="dot four-4"></div>
          </div>
          <div id="dice-one-side-five" className="side five">
            <div className="dot five-1"></div>
            <div className="dot five-2"></div>
            <div className="dot five-3"></div>
            <div className="dot five-4"></div>
            <div className="dot five-5"></div>
          </div>
          <div id="dice-one-side-six" className="side six">
            <div className="dot six-1"></div>
            <div className="dot six-2"></div>
            <div className="dot six-3"></div>
            <div className="dot six-4"></div>
            <div className="dot six-5"></div>
            <div className="dot six-6"></div>
          </div>
        </div>
      </div>
      <div id="roll" className="roll-button">
        <button className="rollDice">Click Me!</button>
      </div>
    </div>
  );
};

export default GameComponent;
