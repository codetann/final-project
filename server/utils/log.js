import chalk from "chalk";
require("dotenv").config();

// custom log messages here
const msgs = {
  server: {
    name: "server",
    message: `running on port ${process.env.SERVER_PORT}`,
    emoji: "🚀",
  },
  authServer: {
    name: "auth",
    message: `running on port ${process.env.AUTH_SERVER_PORT}`,
    emoji: "🔒",
  },
  database: {
    name: "database",
    message: "database authentication was successfull",
    emoji: "🗳️ ",
  },
  socket: {
    name: "socket",
    message: "new socket connection",
    emoji: "🔌",
  },
};

// custom function to log msgs
const _logSuccess = (msg) => {
  const service = chalk.blue(msg.name);
  const space = Array(10 - msg.name.length)
    .fill(" ")
    .join("");
  console.log(`${msg.emoji} ${service}${space}- ${msg.message}`);
};

const log = {
  server: () => _logSuccess(msgs.server),
  authServer: () => _logSuccess(msgs.authServer),
  database: () => _logSuccess(msgs.database),
  socket: () => _logSuccess(msgs.socket),
};

export { log };
