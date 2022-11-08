import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import App from "./App";
//setup redux
import store from "./redux/configStore";
import { Provider } from "react-redux";
import { history } from "./ulti/history";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
