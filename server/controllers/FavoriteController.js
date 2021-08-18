import { FavoritesModel } from "../models/Favorites";
import FavoriteService from "../services/FavoriteService";

// create instance of FavoriteService
const favoriteService = new FavoriteService(FavoritesModel);

class FavoriteController {
  constructor(service) {
    this.service = service;
  }

  async add(req, res) {
    const { data } = req.body;
    // login user
    const details = await this.service.add(data);
    // send details
    res.status(details.statusCode).json(details);
  }

  async remove(req, res) {
    const { data } = req.body;
    // register user
    const details = await this.service.remove(data);
    // send details
    res.status(details.statusCode).json(details);
  }

  async fetch(req, res) {
    // deconstruct response body
    const { data } = req.body;
    // update user info
    const details = await this.service.fetch(data);
    // send details
    res.status(details.statusCode).json(details);
  }
}

export const favoriteController = new FavoriteController(favoriteService);
