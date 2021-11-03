import express from "express";
import * as tr from "../data/tweets.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const username = req.body.username;
  if (username) {
    const tweets = tr.getByUsername(username);
    res.send(tweets);
  } else {
    const tweets = tr.getAll();
    res.status(200).send(tweets);
  }
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tr.getById(id);
  res.send(tweet);
});

router.post("/", (req, res, next) => {
  const { text, username } = req.body;
  const tweets = tr.createTweet(text, username);
  res.send(tweets);
});

router.put("/", (req, res, next) => {
  const text = req.body.text;
  const id = req.params.id;
  const tweets = tr.updateTweet(text, id);
  res.send(tweets);
});

router.delete("/", (req, res, next) => {
  const id = req.params.id;

  const tweets = tr.deleteTweet(id);

  res.send(tweets);
});

export default router;
