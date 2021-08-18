import { useEffect } from "react";
import { BrowserRouter, Switch, useHistory } from "react-router-dom";
import { useAuth } from "../lib/auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export * from "./PrivateRoutes";
export * from "./PublicRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
      <PrivateRoutes />
    </BrowserRouter>
  );
};
