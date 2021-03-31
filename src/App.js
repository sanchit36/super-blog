import React, { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import AddCategory from "./pages/AddCategory";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/add-category" component={AddCategory} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
