import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isOpen } from "../../../actions/navigation";
import Navigation from "./Navigation";

const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen
});

const mapDispatchToProps = dispatch => ({
  navStatus: bindActionCreators(isOpen, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
