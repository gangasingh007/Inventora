import express from "express";
import { authMiddleware , isAdmin } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/adminOnly.js";
import { upload } from "../middlewares/upload.js";
import createProduct, { getAllProducts } from "../controller/product.controller.js";

const router = express.Router();

router.post("/create",authMiddleware,adminOnly,upload.single("image"),createProduct)
router.get("/",getAllProducts)


export default router;