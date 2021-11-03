let tweets = [
  {
    id: new Date().getTime(),
    username: "ellie",
    text: "first tweet!",
    createdAt: new Date("December 17, 1995 03:24:00").toString(),
  },
  {
    id: new Date().getTime() + 1,
    username: "bob",
    text: "second tweet!",
    createdAt: new Date().toString(),
  },
];

export function getAll() {
  return tweets;
}

export function getByUsername(username) {
  return tweets.filter((tweet) => {
    if (tweet.username === username) {
      return tweet;
    }
  });
}

export function getById(id) {
  return tweets.find((tweet) => {
    if (tweet.id === id) {
      return tweet;
    }
  });
}

export function createTweet(text, username) {
  const tweet = {
    id: new Date().getTime(),
    username,
    text,
    createdAt: new Date().toString(),
  };
  tweets = [tweet, ...tweets];

  return tweets;
}

export function updateTweet(text, id) {
  const tweetIdx = tweets.findIndex((tweet) => tweet.id === id);

  tweets[tweetIdx].text = text;

  return tweets;
}

export function deleteTweet(id) {
  const updatedTweet = tweets.filter((tweet) => tweet.id !== id);

  tweets = updateTweet;

  return tweets;
}
