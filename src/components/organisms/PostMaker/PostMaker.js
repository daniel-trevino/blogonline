import React, { Component } from "react";
import moment from "moment";
import Snackbar from "material-ui/Snackbar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import PostModal from "../../molecules/PostModal";
import { appendNewPost } from "../../../actions/posts";

class PostMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      open: false,
      openDialog: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitDialog = this.handleSubmitDialog.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errorText: ""
    });
  }
  handleSubmitDialog() {
    const { title, image, content, posts, currentUser } = this.state;
    const newPost = {
      userId: currentUser.userId,
      postId: 0, // Adding 0 just to follow the order of keys in the object, it will be replaced in appendNewsPost
      image,
      title,
      content,
      views: 0,
      date: moment(Date.now()).format("LL"),
      comments: []
    };
    appendNewPost(newPost, posts.data).then(updatedPosts => {
      this.props.updatePosts(updatedPosts);
      this.setState({ open: true, openDialog: false });
    });
  }
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
          nameTitle="title"
          nameImage="image"
          nameContent="content"
          handleChange={this.handleChange}
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
