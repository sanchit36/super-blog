// import { useReducer } from "react";
import { useReducer } from "react";
import { ADD_CATEGORY, SET_CATEGORIES } from "../types";
import CategoryContext from "./categoryContext";
import categoryReducer from "./categoryReducer";

const CategoryState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  // set Category
  const setCategories = (categories) =>
    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });

  // Add Category
  const addCategory = (category) =>
    dispatch({
      type: ADD_CATEGORY,
      payload: category,
    });

  return (
    <CategoryContext.Provider
      value={{ categories: state, setCategories, addCategory }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
