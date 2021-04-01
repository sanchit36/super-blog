import { useReducer } from "react";
import { GET_BLOG_DETAILS, GET_LATEST_BLOGS } from "../types";
import BlogContext from "./BlogContext";
import BlogReducer from "./BlogReducer";

const BlogState = (props) => {
  const initialState = {
    latestBlogs: [],
    blogDetails: {},
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  // set LatestBlogs
  const setLatestBlogs = (blogs) =>
    dispatch({
      type: GET_LATEST_BLOGS,
      payload: blogs,
    });

  // set blog details
  const setBlogDetails = (blog) =>
    dispatch({
      type: GET_BLOG_DETAILS,
      payload: blog,
    });

  return (
    <BlogContext.Provider value={{ ...state, setLatestBlogs, setBlogDetails }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
