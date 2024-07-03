import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the import from 'react-dom/client'
import App from './App';
import './index.css'; // Ensure this file exists and is correctly set up

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
