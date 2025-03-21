import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <BrowserRouter basename="/BEAUShop">
      <App />
    </BrowserRouter>
  </ShopContextProvider>
);
