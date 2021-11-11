import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    next();
  } else {
    return res.status(400).send(err);
  }
};

export const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name is too short!"),
  body("email").trim().normalizeEmail().isEmail().withMessage("Invalid Email!"),
  validate,
];
