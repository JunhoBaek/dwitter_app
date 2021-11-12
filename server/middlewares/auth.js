import jwt from "jsonwebtoken";
import config from "../config.js";

const isAuth = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!(authHeader && authHeader.startsWith("Bearer"))) {
    return res.status(401).send("Auth error");
  }

  const authToken = authHeader.split(" ")[1];
  const privkey = config.jwt.priv;
  jwt.verify(authToken, privkey, async (err, decoded) => {
    if (err) {
      return res.status(401).send(err);
    }
    req.userId = parseInt(decoded.id);
    req.token = authToken;
    next();
  });
};

export default isAuth;
