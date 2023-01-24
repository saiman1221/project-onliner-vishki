import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/Store'

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App store={store}/>
    </React.StrictMode>
);
