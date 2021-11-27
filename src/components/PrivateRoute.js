import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router";
import UserContext from "../context/user/UserContext";
import { auth } from "../firebase/firebase.setup";
import { setUserProfileData } from "../firebase/firebase.utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserProfileData(user).then((currentUser) => {
          setUser(currentUser);
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
        user?.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

export default PrivateRoute;
