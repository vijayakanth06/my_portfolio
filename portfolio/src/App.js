import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import RESUME from './pages/resume';
import HOME from './pages/home';
import './App.css';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/resume" element={<RESUME />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
