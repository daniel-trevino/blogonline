import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReplyCard from "../../molecules/ReplyCard";
import { getCurrentPost } from "../../../actions/posts";

class Replies extends Component {
  state = { ...this.props };
  componentWillMount() {
    const currentPostId = this.props.match.params.id;
    const { posts } = this.state;

    let currentPost = getCurrentPost(currentPostId, posts.data)[0];

    this.setState({
      ...currentPost
    });
  }
  render() {
    return (
      <div className="replies container">
        <div className="replies__title">
          <h3>Comments ({this.state.comments.length})</h3>
        </div>
        {this.state.comments.map((reply, i) => (
          <div className="replies__item" key={i}>
            <ReplyCard {...reply} />
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Replies);
