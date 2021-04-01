import React, { useReducer } from "react";
import { SET_USER } from "../types";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUser = (user) =>
    dispatch({
      type: SET_USER,
      payload: user,
    });

  return (
    <UserContext.Provider value={{ user: state, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
