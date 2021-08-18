import React from "react";
import { Dashboard } from "../pages";
import { Create, Join } from "../features/game/routes";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export function PrivateRoutes() {
  return (
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/join" component={Join} />
      <PrivateRoute path="/create" component={Create} />
    </Switch>
  );
}
