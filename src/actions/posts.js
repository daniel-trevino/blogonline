// @flow
export const INITIAL_POSTS = "INITIAL_POSTS";
export const UPDATE_POSTS = "UPDATE_POSTS";

export const updatePosts = (result: Array<Object>): Object => ({
  type: UPDATE_POSTS,
  payload: result
});

export const loadPosts = (result: Array<Object>): Object => ({
  type: INITIAL_POSTS,
  payload: result
});

export const getUserPosts = (
  posts: Array<Object>,
  currentUser: Object
): Array<Object> => posts.filter(post => post.userId === currentUser.userId);
