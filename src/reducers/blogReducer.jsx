import { blogs } from "../blogData";
import { SEE_BLOGS, SET_BLOGS } from "../contexts/blogContext";

const initialState = {
  details: []
};

export const blogReducer = (state = blogs, action) => {
  switch (action.type) {
    case SEE_BLOGS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const setBlogDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS:
      return {
        ...state, details: action.payload
      };
    default:
      return state;
  }
};
