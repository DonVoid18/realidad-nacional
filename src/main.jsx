import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "typeface-roboto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
document.body.style.fontFamily = "Roboto, sans-serif";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
