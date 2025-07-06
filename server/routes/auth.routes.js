import express from "express";
import { getMe, login , register } from "../controller/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
// import { usercheck, usercheck1 } from "../types/auth.types.js";

const router = express.Router()

router.post("/register",register);
router.post("/login",login);
router.get("/me", authMiddleware, getMe);

export default router;