import React from 'react'
import { createRoot } from "react-dom/client";
import App from '../components/App.jsx';

import '../scss/style.scss';
import * as bootstrap from 'bootstrap';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);