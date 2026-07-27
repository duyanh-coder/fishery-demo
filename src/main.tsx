import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "@/assets/styles/global.scss";

import "leaflet/dist/leaflet.css";
import "@/utils/leaflet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
