import React, { Component } from "react";
import PropTypes from "prop-types";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  render() {
    return (
      <div
        className={`body ${this.state.isNavOpen === true ? "bodyMove" : ""}`}
      >
        {this.props.children}
      </div>
    );
  }
}

Body.defaultProps = {
  children: null
};

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node])
};

export default Body;
