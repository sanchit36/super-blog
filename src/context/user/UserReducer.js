import { SET_USER } from "../types";

const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default UserReducer;
