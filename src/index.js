import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </>
);
