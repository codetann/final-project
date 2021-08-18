import Sequelize from "sequelize";
import { database } from "../database";

class Sockets {
  constructor() {
    this.id = {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    };
    this.socket_id = Sequelize.STRING;
    this.name = Sequelize.STRING;
    this.room = Sequelize.STRING;
  }
}

const SocketModel = database.define("Sockets", new Sockets());
SocketModel.sync({ force: true });

export { SocketModel };
