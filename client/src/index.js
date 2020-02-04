import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__redux;
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
