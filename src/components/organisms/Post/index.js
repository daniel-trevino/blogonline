import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePosts } from "../../../actions/posts";
import Post from "./Post";

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updatePosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);
