import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/products");
      setProducts(res.data);
    } catch (err) {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="px-6 py-8 bg-none min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-7 text-center">All Products</h1>

      <div className="flex flex-wrap gap-4 ml-4 justify-start mb-6">
        {["All", "Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat === "All" ? "" : cat)}
            className={`px-9 py-3 rounded ${
              category === cat ? "text-purple-400 border-b-1" : null
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <div key={product._id} className="bg-zinc-900 rounded-lg shadow-lg p-4">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-400">{product.category}</p>
            <p className="mt-1 text-green-400 font-bold">₹{product.price}</p>
            <p className="text-xs mt-2">{product.ecoFriendly ? "🌱 Eco-Friendly" : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
