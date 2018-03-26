import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Loadable from "react-loadable";
import LoadingScreen from "../components/organisms/LoadingScreen";

const Loading = () => <LoadingScreen />;

const Frontpage = Loadable({
  loader: () => import("../components/pages/Frontpage"),
  loading: Loading
});

const SinglePost = Loadable({
  loader: () => import("../components/pages/SinglePost"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../components/pages/Login"),
  loading: Loading
});

const SignUp = Loadable({
  loader: () => import("../components/pages/SignUp"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("../components/pages/Dashboard"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("../components/organisms/NotFound"),
  loading: Loading
});

export default class Routes extends Component {
  state = { ...this.props };
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Frontpage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.state.currentUser ? <Redirect to="/dashboard" /> : <Login />
            }
          />
          <Route
            exact
            path="/logout"
            render={() =>
              !this.state.currentUser ? <Redirect to="/login" /> : <NotFound />
            }
          />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/dashboard"
            render={() =>
              this.state.currentUser ? <Dashboard /> : <Redirect to="/login" />
            }
          />
          <Route exact path="/:id" component={SinglePost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
