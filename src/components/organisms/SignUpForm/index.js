import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currentUser } from "../LoginForm/actions-loginForm";
import { updateUsers } from "../../../actions/users";
import SignUpForm from "./SignUpForm";

// Binding the value of currentLanguage (to get it)
const mapStateToProps = state => ({
  users: state.users
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ currentUser }, dispatch);
const mapDispatchToProps = dispatch => ({
  setUsers: bindActionCreators(updateUsers, dispatch),
  setUser: bindActionCreators(currentUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
