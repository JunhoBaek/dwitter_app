import * as validator from "express-validator";

const validate = (req, res, next) => {
  const err = validator.validationResult(req);

  if (err.isEmpty()) {
    next();
  } else {
    return res.status(400).send(err);
  }
};

export const validateUser = [
  validator
    .body("username")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name is too short!"),
  validator.body("email").trim().isEmail().withMessage("Invalid Email!"),
  validate,
];
