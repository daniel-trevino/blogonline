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

export const incrementViewsOfPost = (
  currentPost: Object,
  allPosts: Array<Object>
): Promise<Array<Object>> => {
  return new Promise(resolve => {
    currentPost = incrementViews(currentPost);
    allPosts.push(currentPost);
    allPosts.sort((a, b) => a.postId - b.postId);

    resolve(allPosts);
  });
};

export const appendNewPost = (
  post: Object,
  posts: Array<Object>
): Promise<Array<Object>> => {
  return new Promise(resolve => {
    const nextId = posts[posts.length - 1].postId + 1;
    post.postId = nextId;
    posts = [...posts, post];
    resolve(posts);
  });
};

export const appendNewReply = (
  currentPostId: number,
  posts: Array<Object>,
  newComment: Object
): Promise<Array<Object>> => {
  return new Promise(resolve => {
    let currentPost = getCurrentPost(currentPostId, posts)[0];
    let allPosts = getRestOfPosts(currentPostId, posts);
    currentPost.comments.unshift(newComment);
    allPosts.push(currentPost);
    allPosts.sort((a, b) => a.postId - b.postId);

    resolve(allPosts);
  });
};

export const getUserPosts = (
  posts: Array<Object>,
  currentUser: Object
): Promise<Array<Object>> =>
  new Promise(resolve => {
    resolve(posts.filter(post => post.userId === currentUser.userId));
  });

export const getAuthor = (post: Object, users: Array<Object>): Array<Object> =>
  users.filter(user => user.userId === post.userId);

export const getCurrentPost = (id: number, posts: Array<Object>) =>
  posts.filter((post, i) => parseInt(post.postId, 10) === parseInt(id, 10));

export const getRestOfPosts = (id: number, posts: Array<Object>) =>
  posts.filter((post, i) => parseInt(post.postId, 10) !== parseInt(id, 10));

export const incrementViews = (post: Object): Object => {
  post.views = post.views + 1;
  return post;
};
