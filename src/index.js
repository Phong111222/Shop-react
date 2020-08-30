import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./redux/store/store";
import { SearchProduct } from "./redux/actions/actions";

store.subscribe(() => console.log(store.getState()));
// store.dispatch(SearchProduct("Apple"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
