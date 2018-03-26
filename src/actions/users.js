// @flow
import usersArray from "../data/users";

export const USERS = usersArray;

export const updateUsers = (result: Array<Object>): Object => ({
  type: USERS,
  payload: result
});
