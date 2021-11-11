import * as validator from "express-validator";

const validate = (req, res, next) => {
  const err = validator.validationResult(req);
  if (err.isEmpty()) {
    next();
  } else {
    res.status(400).send(err);
  }
};

export const validateTweet = [
  validator
    .body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Text is too short!"),
  validate,
];
