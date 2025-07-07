import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  const { title, desc, price, category, ecoFriendly } = req.body;
  const image = req.file.path;

  const product = await Product.create({
    title,
    desc,
    price,
    category,
    ecoFriendly,
    image,
  });

  res.status(201).json(product);
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

export default createProduct;