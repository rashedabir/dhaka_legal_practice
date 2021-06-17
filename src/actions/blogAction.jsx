import { SET_BLOGS } from "../contexts/blogContext";

export const setBlogAction = (blogs) => {
  return {
    type: SET_BLOGS,
    payload: blogs,
  };
};
