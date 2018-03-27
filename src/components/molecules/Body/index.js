import { connect } from "react-redux";
import Body from "./Body";

const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen
});

export default connect(mapStateToProps, null)(Body);
