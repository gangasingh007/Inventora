import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Inventora_Products",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

export const upload = multer({ storage });