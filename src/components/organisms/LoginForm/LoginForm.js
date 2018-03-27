import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { loginRequest } from "./actions-loginForm";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };

    this.handleChange = this.handleChange.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }
  componentWillReceiveProps = nextProps => this.setState({ ...nextProps });
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errorText: ""
    });
  }
  loginHandler() {
    const { users, email, password } = this.state;
    loginRequest(users.data, email, password)
      .then(res => {
        if (res) this.props.currentUser(res);
      })
      .catch(e => this.setState({ ...e }));
  }
  render() {
    return (
      <form className="form">
        <Paper className="form__paper" zDepth={2}>
          <div className="form__header">
            <div className="form__title">
              <h1>Login</h1>
            </div>
            <div className="form__description">
              <h4>Enter your details below</h4>
            </div>
          </div>
          <div className="form__email">
            <TextField
              fullWidth
              hintText="hello@blogonline.se"
              floatingLabelText="Email"
              name="email"
              errorText={this.state.errorText}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
          </div>
          <div className="form__password">
            <TextField
              fullWidth
              hintText="Your password"
              floatingLabelText="Password"
              type="password"
              name="password"
              errorText={this.state.errorText}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
          </div>
          <div className="form__submit">
            <RaisedButton
              primary
              fullWidth
              label="Login"
              onClick={this.loginHandler}
            />
          </div>
        </Paper>
      </form>
    );
  }
}

LoginForm.defaultProps = {
  isLogged: undefined
};

LoginForm.propTypes = {
  isLogged: PropTypes.func
};
