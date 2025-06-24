import React from 'react';
import ReactDOM from 'react-dom/client'; // updated import
import App from './App';
import { LikeProvider } from './pages/LikeContext';
import './index.css'
import emailjs from 'emailjs-com';
emailjs.init('wsucaNT1hAHlrl1od'); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LikeProvider>
      <App />
    </LikeProvider>
  </React.StrictMode>
);
