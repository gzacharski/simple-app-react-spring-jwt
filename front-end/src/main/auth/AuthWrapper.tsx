import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

export const authWrapper = (WrappedComponent: any) =>
  class extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(context) => <WrappedComponent {...this.props} {...context} />}
        </AuthContext.Consumer>
      );
    }
  };
