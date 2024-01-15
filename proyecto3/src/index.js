import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root element in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);