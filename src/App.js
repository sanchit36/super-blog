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
import { auth, firestore } from "./firebase/firebase.setup";
import CategoryContext from "./context/category/categoryContext";
import Loader from "./components/Loader";
import BlogDetail from "./pages/BlogDetail";
import Category from "./pages/Category";
import UserContext from "./context/user/UserContext";
import { setUserProfileData } from "./firebase/firebase.utils";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loading, setLoading] = useState(false);
  const { setCategories } = useContext(CategoryContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserProfileData(user);
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    firestore
      .collection("categories")
      .get()
      .then((ref) => {
        if (mounted) {
          setCategories(ref.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
      unsubscribe();
    };
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
          <Route exact path="/blog/:blogSlug" component={BlogDetail} />
          <Route exact path="/category/:categorySlug" component={Category} />
          <PrivateRoute exact path="/add-category" component={AddCategory} />
          <PrivateRoute exact path="/add-blog" component={AddBlog} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
