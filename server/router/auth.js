import express from "express";
import { validateUser } from "../middlewares/userValidation.js";
import * as authController from "../controller/auth.js";

const router = express.Router();

router.post("/signup", validateUser, authController.signup);

router.post("/login", authController.login);

router.get("/me", authController.me);

export default router;
