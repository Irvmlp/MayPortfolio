import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Black from './pages/1-BlackPortfolioFiles/BlackPortfolio.js';
import BlackProjects from './pages/1-BlackPortfolioFiles/BlackPortfolioProjects.js';
import BlackAbout from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/pages/1-BlackPortfolioFiles/BlackPortfolioAbout.js';

import Mario from './pages/3-MarioPortfolio/MarioPortfolio.js';
import MarioProjects from './pages/3-MarioPortfolio/MarioPortfolioProjects.js';

import Loose from './pages/2-LooseLeafPortfolioFiles/LooseLeafPortfolio.js';
import LooseProjects from './pages/2-LooseLeafPortfolioFiles/LoosePortfolioProjects.js';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Black/>} />
          <Route path='About' element={<BlackAbout/>} />

          <Route path="/Loose" element={<Loose />} />
          <Route path="/LooseProjects" element={<LooseProjects />} />


          <Route path="/Black" element={<Black />} /> 
          <Route path="/BlackProjects" element={<BlackProjects />} />  

          <Route path="/Mario" element={<Mario />} /> 
          <Route path="/MarioProjects" element={<MarioProjects />} />  

        </Routes>
      </BrowserRouter>
    </div>
  );
}
