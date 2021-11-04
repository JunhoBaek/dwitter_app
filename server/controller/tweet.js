import * as tr from "../data/tweets.js";

export function get(req, res, next) {
  const id = req.params.id;
  if (id) {
    const tweet = tr.getById(parseInt(id));
    return res.send(tweet);
  }
  const username = req.query.username;
  if (username) {
    const tweets = tr.getByUsername(username);
    return res.send(tweets);
  } else {
    const tweets = tr.getAll();
    return res.send(tweets);
  }
}

export function create(req, res, next) {
  const { text, username } = req.body;
  const tweets = tr.createTweet(text, username);
  return res.send(tweets);
}

export function update(req, res, next) {
  const text = req.body.text;
  const id = parseInt(req.params.id);
  const tweets = tr.updateTweet(text, id);
  return res.send(tweets);
}

export function remove(req, res, next) {
  const id = parseInt(req.params.id);

  const tweets = tr.deleteTweet(id);

  res.send(tweets);
}
