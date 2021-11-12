import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import * as validator from "../middlewares/validation.js";

const router = express.Router();

router.get("/", tweetController.get);

router.get("/:id", tweetController.get);

router.post("/", validator.validateTweet, tweetController.create);

router.put("/:id", validator.validateTweet, tweetController.update);

router.delete("/:id", tweetController.remove);

export default router;
