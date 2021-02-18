import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Router from "./Router";
import ButtonAppBar from "./Components/buttonappbar";

const Main = () => (
  <BrowserRouter>
    <ButtonAppBar />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById("root"));

reportWebVitals();
