import React, { Component } from "react";
import { getUserPosts } from "../../../actions/posts";
import BlogpostGrid from "../BlogpostGrid";

export default class PersonalBlogPosts extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }
  componentWillMount() {
    const userPosts = getUserPosts(
      this.state.posts.data,
      this.state.currentUser
    );
    this.setState({
      posts: {
        data: userPosts
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  render() {
    return <BlogpostGrid title="My Blog posts" data={this.state.posts.data} />;
  }
}
