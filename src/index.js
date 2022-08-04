import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteSwitch from './RouteSwitch';
import Nav from './Components/Nav';
import { CartProvider } from './CartContext';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-body">
    <HashRouter>
      <CartProvider>
        <Nav />
        <RouteSwitch />
      </CartProvider>
    </HashRouter>
  </div>
    
);

