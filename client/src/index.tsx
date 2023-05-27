import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/material-dashboard.css'

import './assets/js/core/popper.min.js';
import './assets/js/plugins/perfect-scrollbar.min.js';
import './assets/js/plugins/smooth-scrollbar.min.js';
import './assets/js/plugins/chartjs.min.js';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
