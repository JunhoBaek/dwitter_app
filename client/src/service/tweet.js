export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.tweetsURL = baseURL + "/tweets";
  }
  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const res = await fetch(`${this.tweetsURL}${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }

  async postTweet(text) {
    const res = await fetch(this.tweetsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        username: "ellie",
      }),
    });
    const data = await res.json();
    return data;
  }

  async deleteTweet(tweetId) {
    await fetch(`${this.tweetsURL}/${tweetId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async updateTweet(tweetId, text) {
    const res = await fetch(`${this.tweetsURL}/${tweetId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });
    const data = await res.json();
    return data;
  }
}
