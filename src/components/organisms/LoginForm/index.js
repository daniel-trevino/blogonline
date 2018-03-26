import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currentUser } from "./actions-loginForm";
import LoginForm from "./LoginForm";

// Binding the value of currentLanguage (to get it)
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ currentUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
