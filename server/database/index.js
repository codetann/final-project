import Sequelize from "sequelize";
import { log } from "../utils";

const env = process.env.NODE_ENV === "development" ? "dev" : "prod";

class Connection {
  constructor() {
    // configuration
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const config = {
      host: "localhost",
      dialect: "sqlite",
      storage: "./server/database/db.sqlite",
      logging: false,
    };
    this.database = new Sequelize(env, username, password, config);
    // start database
    (async () => {
      try {
        await this.database.sync();
        await this.database.authenticate();
        log.database();
      } catch (error) {
        console.log(error);
      }
    })();
  }
}

// init database
export const database = new Connection().database;
