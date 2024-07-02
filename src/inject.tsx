import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Inits the react root inside the content of a tab
const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div className="ex-pointer-events-none ex-fixed ex-bottom-0 ex-left-0 ex-right-0 ex-top-0 ex-z-50 ex-flex ex-items-center ex-justify-center">
      <div style={{ fontSize: 100 }}>asdf</div>
    </div>
  </React.StrictMode>,
);
