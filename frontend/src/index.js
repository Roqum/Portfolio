import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from './App.jsx';

import './scss/style.scss';
import * as bootstrap from 'bootstrap';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);