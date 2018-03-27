import { connect } from "react-redux";
import Replies from "./Replies";

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, null)(Replies);
