import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./Routes/";
import ThemeColors from "./components/atoms/ThemeColors";
import { persistor, store } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/scss/theme.css";

const theme = getMuiTheme(ThemeColors);

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </PersistGate>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
