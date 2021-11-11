import * as tr from "../data/tweets.js";

export async function get(req, res, next) {
  const id = parseInt(req.params.id);
  if (id) {
    await tr.getById(id).then((tweet) => {
      if (tweet) {
        return res.status(200).send(tweet);
      } else {
        return res.sendStatus(404);
      }
    });
  } else {
    const username = req.query.username;
    if (username) {
      await tr.getByUsername(username).then((tweets) => {
        if (tweets.length !== 0) {
          return res.status(200).send(tweets);
        } else {
          return res.sendStatus(404);
        }
      });
    } else {
      await tr.getAll().then((tweets) => {
        return res.status(200).send(tweets);
      });
    }
  }
}

export async function create(req, res, next) {
  const { text, username } = req.body;
  await tr.createTweet(text, username).then(() => {
    return res.sendStatus(201);
  });
}

export async function update(req, res, next) {
  const text = req.body.text;
  const id = parseInt(req.params.id);
  await tr.updateTweet(text, id).then((tweet) => {
    if (tweet) {
      return res.status(201).send(tweet);
    } else {
      return res.sendStatus(404);
    }
  });
}

export async function remove(req, res, next) {
  const id = parseInt(req.params.id);

  await tr.deleteTweet(id).then((result) => {
    console.log(result);
    if (result) {
      return res.status(204).send("Success");
    } else {
      return res.status(404).send("Fail");
    }
  });
}
