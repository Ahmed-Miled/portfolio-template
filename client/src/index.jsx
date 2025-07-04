import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
