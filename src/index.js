import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import "./styles/scss/theme.css";
import App from "./components/Organisms/App";
import ThemeColors from "./components/atoms/ThemeColors";
import registerServiceWorker from "./registerServiceWorker";

const theme = getMuiTheme(ThemeColors);

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
