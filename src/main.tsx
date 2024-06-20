import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Firebase } from './utils/firebase';
import Routing from './routes';

// Initialize Firebase
new Firebase();

// Get the root element from the DOM
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root and render the application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
