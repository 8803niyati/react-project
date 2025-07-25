// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
