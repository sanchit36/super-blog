import { GET_BLOG_DETAILS, GET_LATEST_BLOGS } from "../types";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case GET_LATEST_BLOGS:
      return {
        ...state,
        latestBlogs: action.payload,
      };
    case GET_BLOG_DETAILS:
      return {
        ...state,
        blogDetails: action.payload,
      };
    default:
      return state;
  }
};

export default BlogReducer;
