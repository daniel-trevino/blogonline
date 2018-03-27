import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Image } from "../../atoms/Image";
import {
  getCurrentPost,
  getRestOfPosts,
  getAuthor,
  incrementViewsOfPost
} from "../../../actions/posts";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }
  componentWillMount() {
    const currentPostId = this.props.match.params.id;
    const { posts, users } = this.state;

    let currentPost = getCurrentPost(currentPostId, posts.data)[0];
    let allPosts = getRestOfPosts(currentPostId, posts.data);
    const postAuthor = getAuthor(currentPost, users.data)[0];
    incrementViewsOfPost(currentPost, allPosts).then(updatedPosts => {
      this.props.updatePosts(updatedPosts);
      this.setState({
        ...currentPost,
        ...postAuthor
      });
    });
  }
  render() {
    return (
      <div className="page">
        <article className="post">
          <div className="container">
            <div className="post__image">
              <Image src={this.state.image} alt="Image" />
            </div>
            <div className="post__heading">
              <div className="post__title">
                <h1>{this.state.title}</h1>
              </div>
              <div className="post__meta">
                <div className="post__author">
                  <p>{this.state.name}</p>
                </div>
                <div className="post__division">
                  <p>·</p>
                </div>
                <div className="post__date">
                  <p>{this.state.date}</p>
                </div>
              </div>
            </div>

            <div className="post__content">
              <p>{this.state.content}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default withRouter(Post);
