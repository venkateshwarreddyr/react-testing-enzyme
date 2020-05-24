import { ADD_COMMENT, FETCH_COMMENTS } from "./types";
import Axios from "axios";
export const addComment = (comment) => {
  const action = { type: ADD_COMMENT, payload: comment };
  return action;
};
export const fetchComments = (comment) => {
  const response = Axios.get('http://jsonplaceholder.typicode.com/comments');
  const action = { type: FETCH_COMMENTS, payload: response };
  return action;
};
