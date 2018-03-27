import React, { Component } from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { signUpRequest, validateEmptyField } from "./actions-signUpForm";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errorText: "",
      errorTextName: "",
      errorTextEmail: "",
      errorTextPassword: ""
    });
  }
  signUpHandler() {
    const { name, email, password, verify } = this.state;
    const possibleNewUser = {
      name,
      email,
      password,
      verify
    };

    if (!validateEmptyField(name)) {
      this.setState({ errorTextName: "The name is required" });
      return;
    } else if (!validateEmptyField(email)) {
      this.setState({ errorType: "email", errorText: "The email is required" });
      return;
    } else if (!validateEmptyField(password)) {
      this.setState({ errorTextPassword: "The field is required" });
      return;
    }

    signUpRequest(this.state.users.data, possibleNewUser)
      .then(newUsers => {
        this.props.setUsers(newUsers);
        const getCurrentUser = newUsers.pop();
        this.props.setUser(getCurrentUser);
      })
      .catch(e => this.setState({ ...e }));
  }
  render() {
    return (
      <form className="form">
        <Paper className="form__paper" zDepth={2}>
          <div className="form__header">
            <div className="form__title">
              <h1>SignUp</h1>
            </div>
            <div className="form__description">
              <h4>Enter your details below</h4>
            </div>
          </div>
          <div className="form__name">
            <TextField
              fullWidth
              hintText="John Doe"
              floatingLabelText="Name"
              errorText={this.state.errorTextName}
              name="name"
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
          </div>
          <div className="form__email">
            <TextField
              fullWidth
              errorText={
                this.state.errorType === "email" ? this.state.errorText : ""
              }
              hintText="hello@blogonline.se"
              floatingLabelText="Email"
              name="email"
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
          </div>
          <div className="form__password">
            <TextField
              fullWidth
              hintText="Your password"
              errorText={this.state.errorTextPassword}
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
          </div>
          <div className="form__password">
            <TextField
              fullWidth
              hintText="Verify password"
              floatingLabelText="Verify Password"
              errorText={
                this.state.errorType === "password" ? this.state.errorText : ""
              }
              type="password"
              name="verify"
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
          </div>
          <div className="form__submit">
            <RaisedButton
              primary
              fullWidth
              label="Sign Up"
              onClick={this.signUpHandler}
            />
          </div>
        </Paper>
      </form>
    );
  }
}
