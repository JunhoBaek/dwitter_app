import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import { validateTweet } from "../middlewares/tweetValidation.js";

const router = express.Router();

router.get("/", tweetController.get);

router.get("/:id", tweetController.get);

router.post("/", validateTweet, tweetController.create);

router.put("/:id", validateTweet, tweetController.update);

router.delete("/:id", tweetController.remove);

export default router;
