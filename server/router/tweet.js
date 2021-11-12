import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
import * as validator from "../middlewares/validation.js";
import isAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", isAuth, tweetController.get);

router.get("/:id", isAuth, tweetController.get);

router.post("/", isAuth, validator.validateTweet, tweetController.create);

router.put("/:id", isAuth, validator.validateTweet, tweetController.update);

router.delete("/:id", isAuth, tweetController.remove);

export default router;
