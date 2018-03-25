import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";

class ReplyMaker extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }
  handleClick = () => this.setState({ open: true });
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
          />
          <TextField
            fullWidth
            hintText="I believe this is..."
            floatingLabelText="Your comment"
            multiLine
            rows={3}
          />

          <div className="replyMaker__button">
            <RaisedButton
              primary
              onClick={this.handleClick}
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

export default ReplyMaker;
