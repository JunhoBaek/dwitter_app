let idx = 2;
let tweets = [
  {
    id: 1,
    username: "bob",
    text: "second tweet!",
    createdAt: new Date().toString(),
  },
  {
    id: 0,
    username: "ellie",
    text: "first tweet!",
    createdAt: new Date("December 17, 1995 03:24:00").toString(),
  },
];

export async function getAll() {
  return tweets;
}

export async function getByUsername(username) {
  return tweets.filter((tweet) => {
    if (tweet.username === username) {
      return tweet;
    }
  });
}

export async function getById(id) {
  return tweets.find((tweet) => {
    if (tweet.id === id) {
      return tweet;
    }
  });
}

export async function createTweet(text, username) {
  const tweet = {
    id: idx,
    username,
    text,
    createdAt: new Date().toString(),
  };
  tweets = [tweet, ...tweets];
  idx++;
  return tweet.id;
}

export async function updateTweet(text, id) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    return tweet;
  } else {
    return null;
  }
}

export async function deleteTweet(id) {
  const tweetIdx = tweets.findIndex((tweet) => tweet.id === id);
  if (tweetIdx !== -1) {
    const updatedTweet = tweets.filter((tweet) => tweet.id !== id);
    tweets = updatedTweet;
    return true;
  } else {
    return false;
  }
}
