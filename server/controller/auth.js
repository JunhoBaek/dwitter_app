import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as ur from "../data/users.js";

export async function signup(req, res, next) {
  const { username, password, email } = req.body;
  console.log(username, password, email);
  const hashed = await bcrypt.hash(password, 10);
  await ur.create(username, hashed, email);

  const privkey = await ur.getKey();
  const token = jwt.sign(
    {
      username,
    },
    privkey
  );
  res.json({ token, username });
}

export async function login(req, res, next) {
  const { username, password } = req.body;
  const userData = await ur.getUser(username);
  const result = await bcrypt.compare(password, userData.password);
  const privkey = await ur.getKey();
  if (result) {
    const token = jwt.sign(
      {
        username,
      },
      privkey
    );
    res.json({
      token,
      username,
    });
  }
}

export async function me(req, res, next) {
  const authHeader = req.header("Authorization").split(" ")[1];
  const privkey = await ur.getKey();
  const result = jwt.verify(authHeader, privkey);
  if (result) {
    res.json({
      token: authHeader,
      username: result.username,
    });
  }
}
