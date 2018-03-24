import { connect } from "react-redux";
import Body from "./Body";

// Binding the value of currentLanguage (to get it)
const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen
});

export default connect(mapStateToProps, null)(Body);
