import express from "express";
import { login , register } from "../controller/auth.controller.js";
// import { usercheck, usercheck1 } from "../types/auth.types.js";

const router = express.Router()

router.post("/register",register);
router.post("/login",login);

export default router;