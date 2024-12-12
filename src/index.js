import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Encadre App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si tu veux mesurer les performances
reportWebVitals();
