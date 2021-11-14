import { db } from "../db/database.js";

export async function getUserById(id) {
  return db.execute("SELECT * FROM users WHERE id=?", [id]).then((result) => {
    return result[0][0];
  });
}

export async function getUser(username) {
  return db
    .execute("SELECT * FROM users WHERE username=?", [username])
    .then((result) => {
      return result[0][0];
    });
}

export async function create(username, password, email) {
  return db
    .execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [
      username,
      password,
      email,
    ])
    .then((result) => {
      return result[0].insertId;
    });
}
