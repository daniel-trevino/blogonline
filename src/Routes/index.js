import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadUsers } from "../actions/users";
import { loadPosts } from "../actions/posts";
import Routes from "./Routes";

// Binding the value of currentLanguage (to get it)
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  users: state.users,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  setUsers: bindActionCreators(loadUsers, dispatch),
  setPosts: bindActionCreators(loadPosts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
