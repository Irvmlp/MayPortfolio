import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/home';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
