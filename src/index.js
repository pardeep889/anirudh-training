import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Pardeep from "./pardeep";
// import NewComponent from "./NewComponent";
// import {App} from "./components/test";
// import AppOne from "./components/testOne";
// import App from "./components/validationProps/validation"
// import App from "./components/validationProps/practice"
// import App from "./components/hussain/index";

import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";

// const a = "test";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

// functional Component
// class base component
// hooks

// inline styling
// external styling
// obejet styling
// styled-components`

// <BrowserRouter>
// <Routes />
// </BrowserRouter>
// import { BrowserRouter } from "react-router-dom";