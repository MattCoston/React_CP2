import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Router from "./Router";

const Main = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

// #5
ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
