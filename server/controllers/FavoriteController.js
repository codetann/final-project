import { FavoritesModel } from "../models/Favorites";
import FavoriteService from "../services/FavoriteService";

// create instance of FavoriteService
const favoriteService = new FavoriteService(FavoritesModel);

class FavoriteController {
  constructor(service) {
    this.service = service;
    this.add = this.add.bind(this);
    this.fetch = this.fetch.bind(this);
    this.remove = this.remove.bind(this);
  }

  async add(req, res) {
    const user = req.user;
    const business = req.body;
    // login user
    const details = await this.service.add(user.id, business);
    // send details
    res.status(details.statusCode).json(details);
  }

  async remove(req, res) {
    const user = req.user;
    const business = req.body;
    // register user
    const details = await this.service.remove(user, business);
    // send details
    res.status(details.statusCode).json(details);
  }

  async fetch(req, res) {
    // deconstruct response body
    const user = req.user;
    // update user info
    const details = await this.service.all(user.id);
    // send details
    res.status(details.statusCode).json(details);
  }
}

export const favoriteController = new FavoriteController(favoriteService);
