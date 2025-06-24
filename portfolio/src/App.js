import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import RESUME from './pages/resume';
import HOME from './pages/home';
import Navbar from './components/Navbar';
import './App.css';

const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Scroll to top when specified
      if (location.state?.scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      // Scroll to section when specified
      if (location.state?.scrollTo) {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        return;
      }
      
      // Handle hash navigation
      if (location.hash) {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollHandler>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/resume" element={<RESUME />} />
        </Routes>
      </ScrollHandler>
    </BrowserRouter>
  );
};

export default App;