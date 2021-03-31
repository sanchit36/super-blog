import { ADD_CATEGORY, SET_CATEGORIES } from "../types";

const categoryReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return [...action.payload];
    case ADD_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoryReducer;
