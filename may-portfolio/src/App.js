import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import REALAbout from './pages/REALabout';
import Projects from './pages/projects';

import Homie from './pages/AshPortfolio.js';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homie/>} />
          <Route path="/real" element={<REALAbout />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
