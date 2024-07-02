import React from "react";
import ReactDOM from "react-dom/client";

// Inits the react root inside the content of a tab
const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 10000000,
        pointerEvents: "none",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: 100 }}>🦖</div>
    </div>
  </React.StrictMode>
);
