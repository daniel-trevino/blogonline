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

const App = Loadable({
  loader: () => import("../components/organisms/App"),
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
      <Route exact path="/blog/:id" component={SinglePost} />
      <Route exact path="/app" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
