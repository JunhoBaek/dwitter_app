import express from "express";
import * as validator from "../middlewares/validation.js";
import * as authController from "../controller/auth.js";

const router = express.Router();

router.post("/signup", validator.validateUser, authController.signup);

router.post("/login", authController.login);

router.get("/me", authController.me);

export default router;
