import React, { Fragment, useContext, useEffect, useState } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import AddCategory from "./pages/AddCategory";
import AddBlog from "./pages/AddBlog";
import { firestore } from "./firebase/firebase.setup";
import CategoryContext from "./context/category/categoryContext";
import BlogContext from "./context/blogs/BlogContext";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const { setCategories } = useContext(CategoryContext);
  const { setLatestBlogs } = useContext(BlogContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const ref = await firestore.collection("categories").get();
      setCategories(ref.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    const fetchLatestBlogs = async () => {
      const ref = await firestore
        .collection("blogs")
        .orderBy("published", "asc")
        .limit(6)
        .get();
      setLatestBlogs(ref.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    const dataLoad = async () => {
      setLoading(true);
      await fetchCategories();
      await fetchLatestBlogs();
      setLoading(false);
    };

    dataLoad();

    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  return (
    <Fragment>
      <NavbarComponent />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/add-category" component={AddCategory} />
          <Route exact path="/add-blog" component={AddBlog} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
