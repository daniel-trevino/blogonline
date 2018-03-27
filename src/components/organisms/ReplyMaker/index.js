import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePosts } from "../../../actions/posts";
import ReplyMaker from "./ReplyMaker";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updatePosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReplyMaker);
