import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './i18n/config';
import './index.css';

const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
