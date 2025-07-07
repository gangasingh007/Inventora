import express from "express";
import authRouter from "./auth.routes.js"
import protectedRouter from './protected.routes.js'

const router = express.Router();

router.use("/auth",authRouter);
router.use("/protected",protectedRouter);
router.use("/products",protectedRouter);


export default router;