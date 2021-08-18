import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../lib/auth";
import MainLayout from "../components/Layout/MainLayout";

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
