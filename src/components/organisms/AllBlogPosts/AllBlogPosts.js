import React, { Component } from "react";
import BlogpostGrid from "../BlogpostGrid";

export default class AllBlogPosts extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  render() {
    return (
      <BlogpostGrid title="Latest from the Blog" data={this.state.posts.data} />
    );
  }
}
