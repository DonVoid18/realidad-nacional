import "typeface-roboto";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
document.body.style.fontFamily = "Roboto, sans-serif";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/realidad-nacional">
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
