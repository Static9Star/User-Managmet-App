import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
    </React.StrictMode>
  
);