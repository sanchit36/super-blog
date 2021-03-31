import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryState from "./context/category/CategoryState";

ReactDOM.render(
  <React.StrictMode>
    <CategoryState>
      <Router>
        <App />
      </Router>
    </CategoryState>
  </React.StrictMode>,
  document.getElementById("root")
);
