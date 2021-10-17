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

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export async function getById(id) {
  return tweets.find((t) => t.id === id);
}

export async function create(text, username, name) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }

  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((t) => t.id !== id);
}
