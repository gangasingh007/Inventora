import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Title is required"),
  desc: z.string().min(10, "Description must be longer"),
  price: z.number().min(1, "Price must be positive"),
  category: z.string().min(1, "Select a category"),
  ecoFriendly: z.boolean().optional(),
  image: z.any(),
});
