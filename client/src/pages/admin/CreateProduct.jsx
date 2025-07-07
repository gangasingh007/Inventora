import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../schemas/productSchema";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/authAtom";
import toast from "react-hot-toast";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { cartAtom } from "../../atoms/cartAtom";

const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty"];

const CreateProduct = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(productSchema),
  });

  const auth = useRecoilValue(authAtom);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("ecoFriendly", data.ecoFriendly);
    formData.append("image", data.image[0]);



const setCart = useSetRecoilState(cartAtom);

const addToCart = (product) => {
  setCart((prev) => {
    const existing = prev.find((item) => item._id === product._id);
    if (existing) {
      return prev.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty + 1 } : item
      );
    }
    return [...prev, { ...product, qty: 1 }];
  });
  toast.success("Added to cart!");
};


    try {
      const res = await axios.post("http://localhost:5000/api/v1/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth.token}`,
        },
      });
      toast.success("Product created!");
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create product");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-zinc-900 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Create New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input placeholder="Title" {...register("title")} className="p-2 rounded" />
        {errors.title && <span className="text-red-400">{errors.title.message}</span>}

        <textarea placeholder="Description" {...register("desc")} className="p-2 rounded" />
        {errors.desc && <span className="text-red-400">{errors.desc.message}</span>}

        <input type="number" step="0.01" placeholder="Price" {...register("price", { valueAsNumber: true })} className="p-2 rounded" />
        {errors.price && <span className="text-red-400">{errors.price.message}</span>}

        <select {...register("category")} className="p-2 rounded">
          <option value="">Select Category</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <span className="text-red-400">{errors.category.message}</span>}

        <label className="text-white">
          <input type="checkbox" {...register("ecoFriendly")} className="mr-2" />
          Eco-Friendly
        </label>

        <input type="file" {...register("image")} className="text-white" />
        {errors.image && <span className="text-red-400">{errors.image.message}</span>}

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Create Product</button>
        <button
            onClick={() => addToCart(product)}
            className="mt-3 px-4 py-1 bg-purple-600 rounded text-white">
            Add to Cart
        </button>

      </form>
    </div>
  );
};

export default CreateProduct;
