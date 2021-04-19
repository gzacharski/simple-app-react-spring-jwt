import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { RegistrationForm, NavButton } from "src/main/components";
import { Home, PrivatePage, LoginPage } from "src/main/pages";
import { AuthProviderImpl } from "src/main/auth";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-10">
          <h1>Test App</h1>
        </div>
      </div>
      <div className="row">
        <AuthProviderImpl>
          <Router>
            <div className="col-2">
              <NavButton to="/" name="Home" />
              <NavButton to="/login" name="Log in" />
              <NavButton to="/sign-up" name="Sign up" />
              <NavButton to="/private" name="Private" />
            </div>
            <div className="col-10">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sign-up" component={RegistrationForm} />
                <Route path="/private" component={PrivatePage} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </AuthProviderImpl>
      </div>
    </div>
  );
}

export default App;
