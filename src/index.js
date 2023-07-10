import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/Store'
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App store={store}/>
    </React.StrictMode>
);
