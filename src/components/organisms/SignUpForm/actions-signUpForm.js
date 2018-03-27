// @flow
export const verifyPassword = (newUser: Object): ?boolean =>
  newUser.password === newUser.verify ? true : false;

export const signUpRequest = (
  users: Array<Object>,
  newUser: Object
): Promise<?Array<Object>> =>
  new Promise((resolve, reject) => {
    users.map(user => {
      if (!verifyPassword(newUser)) {
        reject({
          errorType: "password",
          errorText: "The passwords dont match"
        });
      }

      return user.email === newUser.email
        ? reject({
            errorType: "email",
            errorText: "The email is already registered"
          })
        : false;
    });

    delete newUser.verify;
    let newUserWithId = Object.assign({ userId: users.length + 1 }, newUser);

    resolve([...users, newUserWithId]);
  });
