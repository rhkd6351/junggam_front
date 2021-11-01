import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Board from "../Routes/Board";
import Home from "../Routes/Home";
import Footer from "./Footer";
import Login from "./Login";
import Navigation from "./Navigation";

const MyRouter = ({ token, setToken, ...props }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Navigation} />
        </Switch>
        {/* <Route path="/board" component={Navigation} /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/board/:idx" component={Board} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default MyRouter;
