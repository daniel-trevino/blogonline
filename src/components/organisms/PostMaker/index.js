import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePosts } from "../../../actions/posts";

import PostMaker from "./PostMaker";

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updatePosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostMaker);
