// @flow
export const INITIAL_USERS = "INITIAL_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

export const updateUsers = (result: Array<Object>): Object => ({
  type: UPDATE_USERS,
  payload: result
});

export const loadUsers = (result: Array<Object>): Object => ({
  type: INITIAL_USERS,
  payload: result
});
