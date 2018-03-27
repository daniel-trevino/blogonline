import { connect } from "react-redux";
import AllBlogPosts from "./AllBlogPosts";

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, null)(AllBlogPosts);
