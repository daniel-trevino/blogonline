import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/";
import ThemeColors from "./components/atoms/ThemeColors";
import { configureStoreProd, configureStoreDev } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/scss/theme.css";

const theme = getMuiTheme(ThemeColors);
const store =
  process.env.REACT_APP_HOST_ENV === "production"
    ? configureStoreProd()
    : configureStoreDev();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
