import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./components/app/app";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.querySelector(`#root`)
);
