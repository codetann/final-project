import { JsonWebToken } from "../utils";

export const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: true, message: "Unauthorized" });
  }

  try {
    const data = JsonWebToken.verifyToken(token);
    req.user = data;
    next();
  } catch (error) {
    res
      .status(403)
      .json({ error: true, message: "Could not verify auth token" });
  }
};
