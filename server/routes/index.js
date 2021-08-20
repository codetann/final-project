import { userController, favoriteController } from "../controllers";
import { auth } from "../middleware";

const setRoutes = (server) => {
  // UPDATE ROUTES
  server.post("/api/update/user", auth, userController.updateInfo);
  server.post("/api/nearby", auth, userController.nearby);
  server.get("/api/favorites", auth, favoriteController.fetch);
  server.post("/api/favorites/add", auth, favoriteController.add);
  server.post("/api/favorites/remove", auth, favoriteController.remove);
};

const setAuthRoutes = (server) => {
  // AUTH ROUTES
  server.post("/auth/register", userController.register);
  server.post("/auth/login", userController.login);
};

export { setAuthRoutes, setRoutes };
