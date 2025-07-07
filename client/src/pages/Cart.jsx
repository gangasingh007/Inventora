import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cartAtom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const navigate = useNavigate();

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="px-6 py-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center bg-zinc-800 p-4 rounded-lg">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">₹{item.price} x {item.qty}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <button onClick={() => updateQty(item._id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item._id, 1)}>+</button>
                  <button onClick={() => removeItem(item._id)} className="text-red-400 ml-2">✕</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <h2 className="text-xl">Total: ₹{total.toFixed(2)}</h2>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 px-6 py-2 bg-green-600 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
