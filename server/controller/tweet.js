import * as tr from "../data/tweets.js";

export async function get(req, res, next) {
  const id = req.params.id;
  if (id) {
    await tr.getById(parseInt(id)).then((tweet) => {
      return res.send(tweet);
    });
  } else {
    const username = req.query.username;
    if (username) {
      await tr.getByUsername(username).then((tweets) => {
        return res.send(tweets);
      });
    } else {
      await tr.getAll().then((tweets) => {
        return res.send(tweets);
      });
    }
  }
}

export async function create(req, res, next) {
  const { text, username } = req.body;
  await tr.createTweet(text, username).then((tweets) => {
    return res.send(tweets);
  });
}

export async function update(req, res, next) {
  const text = req.body.text;
  const id = parseInt(req.params.id);
  await tr.updateTweet(text, id).then((tweets) => {
    return res.send(tweets);
  });
}

export async function remove(req, res, next) {
  const id = parseInt(req.params.id);

  await tr.deleteTweet(id).then((tweets) => {
    return res.send(tweets);
  });
}
