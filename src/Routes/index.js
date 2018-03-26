import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/:id" component={SinglePost} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
