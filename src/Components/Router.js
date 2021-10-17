import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Navigation from "./Navigation";

const MyRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default MyRouter;
