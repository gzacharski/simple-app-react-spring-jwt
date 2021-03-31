import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LoginForm, RegistrationForm, NavButton } from "src/main/components";
import { Home } from "src/main/pages";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-10">
          <h1>Test App</h1>
        </div>
      </div>
      <div className="row">
        <Router>
          <div className="col-2">
            <NavButton to="/" name="Home" />
            <NavButton to="/login" name="Log in" />
            <NavButton to="/sign-up" name="Sign up" />
          </div>
          <div className="col-10">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/sign-up" component={RegistrationForm} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
