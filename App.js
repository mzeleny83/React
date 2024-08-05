import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">First Page</Link>
          </li>
          <li>
            <Link to="/second">Second Page</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
      </Switch>
    </Router>
  );
};

export default App;
