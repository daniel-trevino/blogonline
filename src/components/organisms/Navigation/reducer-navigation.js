import { NAVIGATION_STATUS } from "../../../actions/navigation";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATION_STATUS: // return list of posts and make loading = false
      return action.payload;
    default:
      return state;
  }
};
