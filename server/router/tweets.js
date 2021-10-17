import express from "express";
import "express-async-error";

let tweets = [
  {
    id: "1",
    text: "드림코딩에서 강의 들으면 너무 좋으다1",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://s.widgetwhats.com/user/1/anakin-1-120x120.png",
  },
  {
    id: "2",
    text: "드림코딩에서 강의 들으면 너무 좋으다2",
    createdAt: Date.now(),
    name: "Ellie",
    username: "ellie",
    url: "https://s.widgetwhats.com/user/1/anakin-1-120x120.png",
  },
];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).send(tweet);
  } else {
    res.status(404).send({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweets
router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).send(tweet);
  } else {
    res.status(404).send({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

export default router;
