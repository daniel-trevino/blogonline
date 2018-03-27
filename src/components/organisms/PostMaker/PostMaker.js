import React, { Component } from "react";
import moment from "moment";
import { isWebUri } from "valid-url";
import Snackbar from "material-ui/Snackbar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import PostModal from "../../molecules/PostModal";
import defaultImage from "../../../images/post-default.png";
import { appendNewPost, validateEmptyField } from "../../../actions/posts";

class PostMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      open: false,
      openDialog: false,
      title: "",
      content: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitDialog = this.handleSubmitDialog.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errorTextTitle: "",
      errorTextContent: ""
    });
  }
  handleSubmitDialog() {
    const { title, image, content, posts, currentUser } = this.state;
    if (!validateEmptyField(title)) {
      this.setState({ errorTextTitle: "The field is required" });
      return;
    } else if (!validateEmptyField(content)) {
      this.setState({ errorTextContent: "The field is required" });
      return;
    }

    const newPost = {
      userId: currentUser.userId,
      postId: 0, // Adding 0 just to follow the order of keys in the object, it will be replaced in appendNewsPost
      image: isWebUri(image) ? image : defaultImage,
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
