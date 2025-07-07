import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Sports",
      "Books",
      "Beauty",
    ],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ecoFriendly: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});


const Product = mongoose.model("Product",productSchema);

export default Product;