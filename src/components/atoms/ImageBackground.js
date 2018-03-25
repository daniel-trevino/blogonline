import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStyle: {
        backgroundImage: `url(${this.props.src})`
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      myStyle: {
        backgroundImage: `url(${nextProps.src})`
      }
    });
  }

  render() {
    return (
      <div
        className={`a__image-div ${this.props.classType}`}
        style={this.state.myStyle}
      />
    );
  }
}

ImageBackground.defaultProps = {
  classType: "",
  src: ""
};

ImageBackground.propTypes = {
  classType: PropTypes.string,
  src: PropTypes.string
};

export default ImageBackground;
