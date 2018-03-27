import { INITIAL_USERS, USERS } from "../actions/users";

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIAL_USERS:
      return { ...state, data: action.payload };
    case USERS:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
}
