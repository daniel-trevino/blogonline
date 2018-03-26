import { connect } from "react-redux";
import Routes from "./Routes";

// Binding the value of currentLanguage (to get it)
const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, null)(Routes);
