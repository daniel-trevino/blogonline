// @flow
import postsArray from "../data/posts";

export const POSTS = postsArray;

export const updatePosts = (result: Array<Object>): Object => ({
  type: POSTS,
  payload: result
});
