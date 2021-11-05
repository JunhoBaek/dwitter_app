export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.tweetsURL = baseURL + "/tweets";
  }
  async getTweets(username) {
    const res = await fetch(this.tweetsURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }

  async postTweet(text) {
    //todo
  }

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error("tweet not found!");
    }
    tweet.text = text;
    return tweet;
  }
}
