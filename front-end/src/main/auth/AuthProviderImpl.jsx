import React, { Component } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { userServiceUrl } from "src/main/data/urls";

type credentialsType = {
  username: string,
  password: string,
};

export default class AuthProviderImpl extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isAuthenticated: false,
      authorizationToken: null,
    };
  }

  authenticate = (credentials: credentialsType) => {
    return axios
      .post(`${userServiceUrl}/login`, credentials)
      .then((response) => {
        console.log(response)
        if (response.status.valueOf(200)) {
          this.setState({
            isAuthenticated: true,
            authorizationToken: response.headers.Authorization,
          });
          console.log(this.state.authorizationToken);
          return true;
        } else {
          throw new Error("Nieprawidłowe dane uwierzytelniające!");
        }
      });
  };

  signout = () => {
    this.setState({
      isAuthenticated: false,
      authorizationToken: null,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticate: this.authenticate,
          signout: this.signout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
