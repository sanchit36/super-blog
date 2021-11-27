import React, { Fragment, useContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
// Components
import { Footer, Loader, Navbar, PrivateRoute } from "./components";
// Pages
import { Home, AddCategory, AddBlog, BlogDetail, Posts } from "./pages";
// Context
import CategoryContext from "./context/category/categoryContext";
import UserContext from "./context/user/UserContext";
// Firebase
import { auth, firestore } from "./firebase/firebase.setup";
import { setUserProfileData } from "./firebase/firebase.utils";

function App() {
  const [loading, setLoading] = useState(false);
  const { setCategories } = useContext(CategoryContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserProfileData(user).then((currentUser) => {
          setUser(currentUser);
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
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:blogSlug" component={BlogDetail} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:categorySlug" component={Posts} />
          <PrivateRoute exact path="/add-category" component={AddCategory} />
          <PrivateRoute exact path="/add-blog" component={AddBlog} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
