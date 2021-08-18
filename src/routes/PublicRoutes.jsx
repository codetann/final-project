import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Login, Register } from "../features/auth/routes";
import { Landing } from "../pages";

export function PublicRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
