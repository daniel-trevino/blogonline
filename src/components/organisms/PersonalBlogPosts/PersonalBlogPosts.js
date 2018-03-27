import React, { Component } from "react";
import { getUserPosts } from "../../../actions/posts";
import BlogpostGrid from "../BlogpostGrid";

export default class PersonalBlogPosts extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };

    this.setUserPosts = this.setUserPosts.bind(this);
  }
  componentWillMount() {
    const { posts, currentUser } = this.state;
    this.setUserPosts(posts, currentUser);
  }
  setUserPosts(posts, currentUser) {
    getUserPosts(posts.data, currentUser).then(userPosts => {
      this.setState({
        posts: {
          data: userPosts
        }
      });
    });
  }
  componentWillReceiveProps(nextProps) {
    const { posts, currentUser } = nextProps;
    this.setUserPosts(posts, currentUser);
  }
  render() {
    return <BlogpostGrid title="My Blog posts" data={this.state.posts.data} />;
  }
}
