import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoalProvider } from "./context/GoalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoalProvider>
        <App />
      </GoalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
