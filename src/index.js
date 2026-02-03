// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';

// Get root element
const rootElement = document.getElementById('root');

// Error handling for missing root element
if (!rootElement) {
  throw new Error('Failed to find the root element. Make sure there is a <div id="root"></div> in your HTML.');
}

// Create root and render app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);

// Log app version and environment (for development)
if (process.env.NODE_ENV === 'development') {
  console.log('🌱 WasteCut Platform v1.0.0');
  console.log('Environment:', process.env.NODE_ENV);
}