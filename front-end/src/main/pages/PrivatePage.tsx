import React from "react";
import { Route, Switch } from "react-router-dom";
import { authWrapper, AuthPrompt } from "src/main/auth";
import UserHome from "./UserHome";

export const PrivatePage = authWrapper((props: any) => {
  return (
    <Switch>
      {!props.isAuthenticated && <Route component={AuthPrompt} />}
      <UserHome />
    </Switch>
  );
});
