import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DeleteModal extends Component {
  state = { ...this.props };

  componentWillReceiveProps = nextProps => this.setState({ ...nextProps });
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.props.closeHandleDelete}
      />,
      <FlatButton label="Confirm" primary onClick={this.props.deleteHandle} />
    ];

    return (
      <div>
        <RaisedButton label="Alert" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.deleteModal}
          onRequestClose={this.props.closeHandleDelete}
        >
          Delete post?
        </Dialog>
      </div>
    );
  }
}

DeleteModal.defaultProps = {
  closeHandleDelete: undefined,
  deleteHandle: undefined
};

DeleteModal.propTypes = {
  closeHandleDelete: PropTypes.func,
  deleteHandle: PropTypes.func
};
