import React from "react";
import { withRouter } from "react-router-dom";
import { authWrapper } from "src/main/auth";
import { LoginForm } from "src/main/components";

export const AuthPrompt = withRouter(authWrapper(()=><LoginForm />));
