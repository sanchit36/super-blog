import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router";
import UserContext from "../context/user/UserContext";
import { auth } from "../firebase/firebase.setup";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
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

    return () => {
      unsubscribe();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        user?.uid === "bTZxBs7QqreufIgD9MIxhkITiit1" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
