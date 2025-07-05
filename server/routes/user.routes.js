import express from "express";

const router = express.Router();


router.get("/me",getMe)

export default router;