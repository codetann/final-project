import path from "path";
import cors from "cors";
import socket from "socket.io";
import express from "express";
import { log } from "../utils";
import { auth } from "../middleware";
import { startSockets } from "../controllers";
import { setRoutes, setAuthRoutes } from "../routes";
import http from "http";
require("dotenv").config();

// init servers
const app = express();
const server = http.createServer(app);
const authServer = express();

// middleware
app.use(auth);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

authServer.use(cors());
authServer.use(express.json());

// routes
setRoutes(app);
setAuthRoutes(authServer);

// start web sockets
const io = socket(server, {
  cors: {
    origins: ["http://localhost:8050"],
  },
});
startSockets(io);

// export servers
export const startServer = () => {
  server.listen(process.env.SERVER_PORT, log.server);
  authServer.listen(process.env.AUTH_SERVER_PORT, log.authServer);
};
