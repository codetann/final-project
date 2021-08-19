import Service from "./Service";
import { JsonWebToken } from "../utils";
import bcrypt from "bcrypt";

/**
 *  UserService
 *
 * - extends the Service class allowing direct access to functions accessing the database
 * - handles any actions reguarding the user and their data
 * - returns auth tokens on successful login/register
 * - returns status code, errors, and data for express
 */

class UserService extends Service {
  constructor(model) {
    super(model);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  async login(data) {
    try {
      const { email, password } = data;
      // find user in database
      const item = await this.get({ email });
      // check hash password
      const match = await bcrypt.compare(password, item.password);
      if (!match) throw new Error("Unable to log in user");
      // generate tokens
      const tokens = new JsonWebToken({ email });
      // return success details
      return {
        error: false,
        statusCode: 200,
        data: item,
        tokens: {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        },
      };
    } catch (error) {
      console.error("login", error);
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Unable to find user in database",
        tokens: null,
      };
    }
  }

  async register(data) {
    try {
      // hash user password
      data.password = await bcrypt.hash(data.password, 10);
      // create empty photo property
      data.photo = "";
      // insert new user into database
      const user = await this.insert(data);
      // generate tokens
      const tokens = new JsonWebToken(data.email);
      // return success details
      return {
        error: false,
        statusCode: 200,
        data: user,
        tokens: {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        },
      };
    } catch (error) {
      console.error(error);
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Unable to create user in database",
        tokens: null,
      };
    }
  }

  async updateInfo(selectors, data) {
    try {
      // update user info in database
      const user = await this.updateDetails(selectors, data);
      // return success details
      return {
        error: false,
        statusCode: 200,
        data: user,
      };
    } catch (error) {
      console.log(error);
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Unable to create user in database",
      };
    }
  }
}

export default UserService;
