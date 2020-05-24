import reducer from "./comments";
import { combineReducers } from "redux";
export default combineReducers({
  comments: reducer,
});
