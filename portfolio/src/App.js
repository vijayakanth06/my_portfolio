import React, { useEffect  } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import RESUME from './pages/resume';
import HOME from './pages/home';
import Navbar from './components/Navbar';
import './App.css';

const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = (id) => {
      let attempt = 0;
      const maxAttempts = 20;

      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (attempt < maxAttempts) {
          attempt++;
          setTimeout(tryScroll, 100);
        }
      };

      tryScroll();
    };

    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.state?.scrollTo) {
      scrollToElement(location.state.scrollTo);
    } else if (location.hash) {
      scrollToElement(location.hash.substring(1));
    }
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