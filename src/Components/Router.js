import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Board from "../Routes/Board";
import Home from "../Routes/Home";
import Footer from "./Footer";
import Navigation from "./Navigation";

const MyRouter = () => {
  return (
    <>
      <Router>
        <Route path="/board/:idx" component={Navigation} />
        <Route path="/board/:idx" component={Board} />

        <Route exact path="/" component={Navigation} />
        <Route exact path="/" component={Home} />
      </Router>
      <Footer />
    </>
  );
};

export default MyRouter;
