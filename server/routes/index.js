import { userController } from "../controllers";

const setRoutes = (server) => {
  // UPDATE ROUTES
  server.post("/api/update/user", userController.updateInfo);
};

const setAuthRoutes = (server) => {
  // AUTH ROUTES
  server.post("/auth/register", userController.register);
  server.post("/auth/login", userController.login);
};

export { setAuthRoutes, setRoutes };
