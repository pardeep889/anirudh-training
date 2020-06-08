import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Pardeep from "./pardeep";
// import NewComponent from "./NewComponent";
import {App} from "./components/test";
import AppOne from "./components/testOne";

import * as serviceWorker from "./serviceWorker";



ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppOne/>
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
// styled-components