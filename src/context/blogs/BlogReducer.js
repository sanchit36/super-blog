import { GET_LATEST_BLOGS } from "../types";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case GET_LATEST_BLOGS:
      return {
        ...state,
        latestBlogs: action.payload,
      };
    default:
      return state;
  }
};

export default BlogReducer;
