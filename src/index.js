import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryState from "./context/category/CategoryState";
import BlogState from "./context/blogs/BlogState";
import UserState from "./context/user/UserState";

ReactDOM.render(
  <CategoryState>
    <BlogState>
      <UserState>
        <Router>
          <App />
        </Router>
      </UserState>
    </BlogState>
  </CategoryState>,
  document.getElementById("root")
);
