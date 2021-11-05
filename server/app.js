import express from "express";
import morgan from "morgan";
import cors from "cors";
import tweetRouter from "./router/tweet.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetRouter);

app.listen(8080);
