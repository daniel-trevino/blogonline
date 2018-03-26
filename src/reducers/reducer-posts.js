import { POSTS } from "../actions/posts";

const INITIAL_STATE = POSTS;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POSTS:
      return { ...state, data: action.payload, error: null };
    default:
      return state;
  }
}
