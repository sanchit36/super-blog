import React, { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
