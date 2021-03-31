import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryState from "./context/category/CategoryState";
import BlogState from "./context/blogs/BlogState";

ReactDOM.render(
  <CategoryState>
    <BlogState>
      <Router>
        <App />
      </Router>
    </BlogState>
  </CategoryState>,
  document.getElementById("root")
);
