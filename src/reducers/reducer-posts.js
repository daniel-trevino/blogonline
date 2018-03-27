import { INITIAL_POSTS, UPDATE_POSTS } from "../actions/posts";

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIAL_POSTS:
      return { ...state, data: action.payload };
    case UPDATE_POSTS:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
}
