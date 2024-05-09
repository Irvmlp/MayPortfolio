import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loose from './pages/2-LooseLeafPortfolioFiles/LooseLeafPortfolio.js';
import LooseProjects from './pages/2-LooseLeafPortfolioFiles/LoosePortfolioProjects.js';

import Black from './pages/1-BlackPortfolioFiles/BlackPortfolio.js';
import BlackProjects from './pages/1-BlackPortfolioFiles/BlackPortfolioProjects.js';

import Cartoon from './pages/3-CartoonPortfolio/CartoonPortfolio.js';
import CartoonProjects from './pages/3-CartoonPortfolio/CartoonPortfolioProjects.js';

import Mario from './pages/4-MarioPortfolio/MarioPortfolio.js';
import MarioProjects from './pages/4-MarioPortfolio/MarioPortfolioProjects.js';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loose/>} />

          <Route path="/Loose" element={<Loose />} />
          <Route path="/LooseProjects" element={<LooseProjects />} />


          <Route path="/Black" element={<Black />} /> 
          <Route path="/BlackProjects" element={<BlackProjects />} />  


          <Route path="/Cartoon" element={<Cartoon />} /> 
          <Route path="/CartoonProjects" element={<CartoonProjects />} />  


          <Route path="/Mario" element={<Mario />} /> 
          <Route path="/MarioProjects" element={<MarioProjects />} />  

        </Routes>
      </BrowserRouter>
    </div>
  );
}
