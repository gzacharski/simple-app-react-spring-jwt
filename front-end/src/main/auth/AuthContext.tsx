import React from "react";

type credentialsType = {
  username: string,
  password: string,
};

export const AuthContext = React.createContext({
  isAuthenticated: false,
  authorizationToken: null,
  authenticate: (credentials: credentialsType) => {},
  signout: () => {},
});
