import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNavOpen } from "../../../actions/navigation";
import { logoutRequest } from "../LoginForm/actions-loginForm";
import { currentUser } from "../LoginForm/actions-loginForm";
import Navigation from "./Navigation";

const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  setNav: bindActionCreators(isNavOpen, dispatch),
  setLogout: bindActionCreators(logoutRequest, dispatch),
  setUser: bindActionCreators(currentUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
