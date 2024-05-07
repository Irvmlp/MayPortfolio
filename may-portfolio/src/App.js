import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import REALAbout from './pages/REALabout';
import Projects from './pages/projects';


import Loose from './pages/AshPortfolio.js';
import Black from './pages/BlackPortfolio.js';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loose/>} />
          <Route path="/real" element={<REALAbout />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/black" element={<Black />} /> 
          
          <Route path="/loose" element={<Loose />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}
