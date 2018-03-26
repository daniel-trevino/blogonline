// @flow
export const CURRENT_USER = "CURRENT_USER";

export const currentUser = (result: Object): Object => ({
  type: CURRENT_USER,
  payload: result
});

export const logoutRequest = (currentUser: Object): ?Object =>
  new Promise(resolve => {
    currentUser ? resolve(null) : resolve(currentUser);
  });

export const loginRequest = (
  users: Array<Object>,
  email: string,
  password: string
): Promise<?Object> =>
  new Promise(resolve => {
    users.map(
      user =>
        user.email === email && user.password === password
          ? resolve(user)
          : resolve(null)
    );
  });
