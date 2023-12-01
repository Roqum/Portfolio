import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop.js';


import './scss/style.scss';
import * as bootstrap from 'bootstrap';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
