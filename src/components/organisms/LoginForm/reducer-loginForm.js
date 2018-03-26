import { CURRENT_USER } from "./actions-loginForm";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER: // return list of posts and make loading = false
      return action.payload;
    default:
      return state;
  }
};
