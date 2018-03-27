import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePosts } from "../../../actions/posts";
import PostCard from "./PostCard";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updatePosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
