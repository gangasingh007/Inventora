import express from "express";
import { authMiddleware , isAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

// Authenticated user only
router.get("/user", authMiddleware, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}!`, role: req.user.role });
});

// Admin only
router.get("/admin", authMiddleware, isAdmin, (req, res) => {
  res.json({ message: "Welcome Admin!", user: req.user });
});

export default router;