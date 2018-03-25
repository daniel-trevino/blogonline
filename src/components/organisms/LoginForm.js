import React from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default () => (
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
        />
      </div>
      <div className="form__password">
        <TextField
          fullWidth
          hintText="Your password"
          floatingLabelText="Password"
          type="password"
        />
      </div>
      <div className="form__submit">
        <RaisedButton primary label="Login" fullWidth />
      </div>
    </Paper>
  </form>
);
