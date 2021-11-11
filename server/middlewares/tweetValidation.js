import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const err = validationResult(req);
  if (err.isEmpty()) {
    next();
  } else {
    return res.status(400).send(err);
  }
};

export const validateTweet = [
  body("text").trim().isLength({ min: 3 }).withMessage("Text is too short!"),
  validate,
];
