import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import logo from "../../../images/logo.svg";

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <RaisedButton label="Default" primary />
  </div>
);
