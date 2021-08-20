import React from "react";
import { Dashboard } from "../pages";
import { Create, Join } from "../features/game/routes";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Profile } from "../features/user/routes/Profile";
import { Waiting, Game, Finish } from "../features/game/routes";
import { Nearby } from "../features/nearby/routes/Nearby";
import { Favorites } from "../features/favorites/routes/Favorites";

export function PrivateRoutes() {
  return (
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/join" component={Join} />
      <PrivateRoute path="/create" component={Create} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/waiting" component={Waiting} />
      <PrivateRoute path="/game" component={Game} />
      <PrivateRoute path="/finish" component={Finish} />
      <PrivateRoute path="/nearby" component={Nearby} />
      <PrivateRoute path="/favorites" component={Favorites} />
    </Switch>
  );
}
