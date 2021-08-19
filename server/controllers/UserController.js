import { UserModel } from "../models/Users";
import UserService from "../services/UserService";

// create instance of UserService
const userService = new UserService(UserModel);

class UserController {
  constructor(service) {
    this.service = service;
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  async login(req, res) {
    // login user
    const details = await this.service.login(req.body);
    // send details
    res.status(details.statusCode).json(details);
  }

  async register(req, res) {
    // register user
    const details = await this.service.register(req.body);
    // send details
    res.status(details.statusCode).json(details);
  }

  async updateInfo(req, res) {
    // deconstruct response body and user
    const selectors = { email: req.user.email };
    const { data } = req.body;
    // update user info
    const details = await this.service.updateInfo(selectors, data);
    // send details
    res.status(details.statusCode).json(details);
  }
}

export const userController = new UserController(userService);
