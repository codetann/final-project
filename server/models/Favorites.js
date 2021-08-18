import Sequelize from "sequelize";
import { database } from "../database";

class Favorites {
  constructor() {
    this.id = {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    };
    this.name = Sequelize.STRING;
    this.user_id = Sequelize.INTEGER;
    this.image = Sequelize.STRING;
    this.address = Sequelize.STRING;
    this.price = Sequelize.STRING;
    this.rating = Sequelize.DECIMAL;
    this.review_count = Sequelize.INTEGER;
    this.latitude = Sequelize.DECIMAL;
    this.longitude = Sequelize.DECIMAL;
    this.yelp_id = Sequelize.STRING;
    this.phone = Sequelize.STRING;
    this.display_phone = Sequelize.STRING;
    this.distance = Sequelize.INTEGER;
  }
}

export const FavoritesModel = database.define("Favorites", new Favorites());
