import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as ur from "../data/users.js";
import config from "../config.js";

export async function signup(req, res, next) {
  const { username, password, email } = req.body;
  const userData = await ur.getUser(username);
  if (userData) {
    return res.status(409).send("User already exists.");
  }
  const hashed = await bcrypt.hash(password, parseInt(config.jwt.salt));
  const userId = await ur.create(username, hashed, email);

  const privkey = config.jwt.priv;
  const token = jwt.sign(
    {
      userId,
    },
    privkey
  );
  res.json({ token, username });
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const userData = await ur.getUser(username);
  if (userData) {
    const userId = userData.id;
    const result = await bcrypt.compare(password, userData.password);
    const privkey = config.jwt.priv;
    if (result) {
      const token = jwt.sign(
        {
          id: userId,
        },
        privkey
      );
      res.json({
        token,
        username,
      });
    }
  } else {
    res.status(401).send("User not found");
  }
}

export async function me(req, res, next) {
  const user = await ur.getUserById(req.userId);
  res.json({
    token: req.token,
    username: user.username,
  });
}
