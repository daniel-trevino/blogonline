import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import TextField from "material-ui/TextField";
import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";
import { appendNewReply } from "../../../actions/posts";

class ReplyMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      open: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.setState({ currentPostId: this.props.match.params.id });
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errorText: ""
    });
  }
  handleSubmit() {
    const { posts, name, content, currentPostId } = this.state;
    const newComment = {
      name,
      content,
      date: moment(Date.now()).format("LL")
    };

    appendNewReply(currentPostId, posts.data, newComment).then(updatedPosts => {
      this.props.updatePosts(updatedPosts);

      this.setState({
        open: true,
        name: "",
        comment: ""
      });
    });
  }
  handleRequestClose = () => this.setState({ open: false });
  render() {
    return (
      <div className="replyMaker container">
        <div className="replyMaker__content">
          <div className="replyMaker__title">
            <h3>Leave a Reply</h3>
          </div>
          <TextField
            fullWidth
            hintText="John Doe"
            floatingLabelText="Your name"
            name="name"
            onChange={this.handleChange}
            onBlur={this.handleChange}
          />
          <TextField
            fullWidth
            hintText="I believe this is..."
            floatingLabelText="Your comment"
            multiLine
            rows={3}
            name="content"
            onChange={this.handleChange}
            onBlur={this.handleChange}
          />

          <div className="replyMaker__button">
            <RaisedButton
              primary
              onClick={this.handleSubmit}
              label="Add Comment"
            />
          </div>

          <Snackbar
            open={this.state.open}
            message="Comment added to the post"
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ReplyMaker);
