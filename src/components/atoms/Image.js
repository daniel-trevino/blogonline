import React from "react";
import PropTypes from "prop-types";

export const Image = props => (
  <img className={`image ${props.classType}`} src={props.src} alt={props.alt} />
);

Image.defaultProps = {
  classType: ""
};

Image.propTypes = {
  classType: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired
};

export default Image;
