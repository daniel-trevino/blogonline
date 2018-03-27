import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadUsers } from "../actions/users";
import Routes from "./Routes";

// Binding the value of currentLanguage (to get it)
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
