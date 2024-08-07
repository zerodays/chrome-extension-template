import React from 'react';
import ReactDOM from 'react-dom/client';
import css from './globals.css?inline';
import './i18n/config';
import { InjectContent } from './inject-content';

// Creates a host element in webpage body to attach shadow to
const host = document.createElement('div');
host.id = 'crx-host';
document.body.appendChild(host);

// Attaches shadow to host element
const shadow = host.attachShadow({ mode: 'open' });

// Injects global styles to shadow
const style = new CSSStyleSheet();
style.replaceSync(css);
shadow.adoptedStyleSheets = [style];

// Creates a root element to attach react to
const root = document.createElement('div');
root.id = 'crx-root';

// Attaches react to shadow
shadow.appendChild(root);

// Renders react in '#crx-root' element
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <InjectContent />
  </React.StrictMode>,
);
