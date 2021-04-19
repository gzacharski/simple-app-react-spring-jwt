import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authWrapper, AuthPrompt } from "src/main/auth";

export const LoginPage = authWrapper((props: any) => {
  return (
    <Switch>
      {!props.isAuthenticated && <Route component={AuthPrompt} />}
      <Redirect to="/private" />
    </Switch>
  );
});
