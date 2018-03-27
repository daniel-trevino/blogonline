// @flow
export const INITIAL_USERS = "INITIAL_USERS";
export const USERS = "USERS";

export const updateUsers = (result: Array<Object>): Object => ({
  type: USERS,
  payload: result
});

export const loadUsers = (result: Array<Object>): Object => ({
  type: INITIAL_USERS,
  payload: result
});
