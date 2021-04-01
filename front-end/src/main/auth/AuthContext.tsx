import React from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  authorizationToken: null,
  authenticate: (username: string, password: string) => {},
  signout: () => {},
});
