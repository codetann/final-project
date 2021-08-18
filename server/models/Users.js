import Sequelize from "sequelize";
import { database } from "../database";

class Users {
  constructor() {
    this.id = {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    };
    this.name = Sequelize.STRING;
    this.email = {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    };
    this.photo = Sequelize.STRING;
    this.password = Sequelize.STRING;
  }
}

const UserModel = database.define("Users", new Users());

export { UserModel };
