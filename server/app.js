import express from "express";
import morgan from "morgan";
import cors from "cors";
import tweetRouter from "./router/tweet.js";
import authRouter from "./router/auth.js";
import config from "./config.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
});

app.listen(config.host.port);
