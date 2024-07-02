import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/config';
import './index.css';
import { InjectContent } from './inject-content';

// Inits the react root inside the content of a tab
const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <InjectContent />
  </React.StrictMode>,
);
