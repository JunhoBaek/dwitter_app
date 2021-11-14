// let idx = 2;
// let tweets = [
//   {
//     id: "1",
//     username: "bob",
//     userId: "0",
//     text: "second tweet!",
//     createdAt: new Date().toString(),
//   },
//   {
//     id: "0",
//     username: "ellie",
//     userId: "1",
//     text: "first tweet!",
//     createdAt: new Date("December 17, 1995 03:24:00").toString(),
//   },
// ];

import { db } from "../db/database.js";

const SELECT_JOIN =
  "SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username FROM tweets as tw JOIN users as us ON tw.userId=us.id";
const ORDER = "ORDER BY tw.createdAt DESC";

export async function getAll() {
  return db.execute(`${SELECT_JOIN} ${ORDER}`).then((result) => {
    return result[0];
  });
}

export async function getByUsername(username) {
  return db
    .execute(`${SELECT_JOIN} WHERE us.username=? ${ORDER}`, [username])
    .then((result) => {
      return result[0];
    });
  // return tweets.filter((tweet) => {
  //   if (tweet.username === username) {
  //     return tweet;
  //   }
  // });
}

export async function getById(id) {
  return db
    .execute(`${SELECT_JOIN} WHERE tw.id=? ${ORDER}`, [id])
    .then((result) => {
      return result[0][0];
    });
  // return tweets.find((tweet) => {
  //   if (tweet.id === id) {
  //     return tweet;
  //   }
  // });
}

export async function createTweet(text, userId) {
  const createdAt = new Date();
  return db
    .execute("INSERT INTO tweets (userId, text, createdAt) VALUES (?, ?, ?)", [
      userId,
      text,
      createdAt,
    ])
    .then((result) => {
      return getById(result[0].insertId);
    });
  // const tweet = {
  //   id: String(idx),
  //   username,
  //   userId,
  //   text,
  //   createdAt: new Date().toString(),
  // };
  // tweets = [tweet, ...tweets];
  // idx++;
  // return tweet.id;
}

export async function updateTweet(text, id) {
  return db
    .execute("UPDATE tweets SET text=? WHERE id=?", [text, id])
    .then(() => {
      return getById(id);
    });
  // const tweet = tweets.find((tweet) => tweet.id === id);
  // if (tweet) {
  //   tweet.text = text;
  //   return tweet;
  // } else {
  //   return null;
  // }
}

export async function deleteTweet(id) {
  return db.execute("DELETE FROM tweets WHERE id=?", [id]).then(() => {
    return true;
  });
  // const tweetIdx = tweets.findIndex((tweet) => tweet.id === id);
  // if (tweetIdx !== -1) {
  //   const updatedTweet = tweets.filter((tweet) => tweet.id !== id);
  //   tweets = updatedTweet;
  //   return true;
  // } else {
  //   return false;
  // }
}
