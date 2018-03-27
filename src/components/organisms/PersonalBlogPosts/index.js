import { connect } from "react-redux";
import PersonalBlogPosts from "./PersonalBlogPosts";

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.currentUser
});

export default connect(mapStateToProps, null)(PersonalBlogPosts);
