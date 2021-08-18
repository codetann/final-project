import jwt from "jsonwebtoken";

class JsonWebToken {
  constructor(data) {
    this.accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_KEY);
    this.refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_KEY);
  }

  static verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  }
}

export { JsonWebToken };
