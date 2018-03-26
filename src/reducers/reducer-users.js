import { USERS } from "../actions/users";

const INITIAL_STATE = USERS;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS:
      return { ...state, data: action.payload, error: null };
    default:
      return state;
  }
}
