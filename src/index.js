import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ModalProvider } from "./components/Modal";



ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("root")
);
