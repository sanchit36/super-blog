import { useReducer } from "react";
import { GET_LATEST_BLOGS } from "../types";
import BlogContext from "./BlogContext";
import BlogReducer from "./BlogReducer";

const BlogState = (props) => {
  const initialState = {
    latestBlogs: [],
    categoryBlogs: [],
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  // get LatestBlogs
  const setLatestBlogs = (blogs) =>
    dispatch({
      type: GET_LATEST_BLOGS,
      payload: blogs,
    });

  return (
    <BlogContext.Provider value={{ ...state, setLatestBlogs }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
