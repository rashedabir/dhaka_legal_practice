import { combineReducers } from "redux";
import { blogReducer, setBlogDetailReducer } from "./blogReducer";

const reducers = combineReducers({
  blogs: blogReducer,
  blogDetail: setBlogDetailReducer,
});

export default reducers;
