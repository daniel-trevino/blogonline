import React, { Component } from "react";
import Snackbar from "material-ui/Snackbar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import PostModal from "../molecules/PostModal";

class PostMaker extends Component {
  state = {
    open: false,
    openDialog: false
  };

  handleSubmitDialog = () => this.setState({ open: true, openDialog: false });
  handleOpenDialog = () => {
    this.setState({ openDialog: true });
  };
  handleClose = () => {
    this.setState({ open: false, openDialog: false });
  };
  render() {
    return (
      <div className="postMaker container">
        <div className="postMaker__button">
          <h2>Add Post</h2>
          <FloatingActionButton>
            <ContentAdd onClick={this.handleOpenDialog} />
          </FloatingActionButton>
        </div>
        <PostModal
          {...this.state}
          handleClose={this.handleClose}
          handleSubmitDialog={this.handleSubmitDialog}
          handleOpenDialog={this.handleOpenDialog}
        />
        <Snackbar
          open={this.state.open}
          message="Post added"
          autoHideDuration={3000}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

export default PostMaker;
