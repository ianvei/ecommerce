import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteSwitch from './RouteSwitch';
import Nav from './Components/Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-body">
    <Nav />
    <RouteSwitch />
  </div>
    
);

