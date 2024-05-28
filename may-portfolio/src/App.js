import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Black from './pages/1-BlackPortfolioFiles/BlackPortfolio';
import BlackProjects from './pages/1-BlackPortfolioFiles/BlackPortfolioProjects';
import BlackAbout from './pages/1-BlackPortfolioFiles/BlackPortfolioAbout';

import Mario from './pages/3-MarioPortfolio/MarioPortfolio';
import MarioProjects from './pages/3-MarioPortfolio/MarioPortfolioProjects';

import Loose from './pages/2-LooseLeafPortfolioFiles/LooseLeafPortfolio';
import LooseProjects from './pages/2-LooseLeafPortfolioFiles/LoosePortfolioProjects';

import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import './index.css'; // Tailwind CSS imports

import NotFound from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/NotFound.js';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Black />} />
          <Route path="about" element={<BlackAbout />} />
          <Route path="black" element={<Black />} />
          <Route path="projects" element={<BlackProjects />} />
          <Route path="mario" element={<Mario />} />
          <Route path="marioprojects" element={<MarioProjects />} />
          <Route path="loose" element={<Loose />} />
          <Route path="looseprojects" element={<LooseProjects />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
