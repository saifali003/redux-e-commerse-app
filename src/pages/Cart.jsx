import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../feature/cartSlice";
export default function Cart() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">🛒 Your Cart</h1>
            {items.length === 0 ? (
                <p className="text-gray-500">Cart is empty</p>
            ) : (
                <div className="space-y-4">

                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-16 w-16 object-contain"
                                />
                                <div>
                                    <h2 className="font-medium line-clamp-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-green-600 font-bold">
                                        ₹{item.price}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => dispatch(decreaseQty(item.id))}
                                    className="px-3 py-1 bg-gray-200 rounded"
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => dispatch(increaseQty(item.id))}
                                    className="px-3 py-1 bg-gray-200 rounded"
                                >
                                    +
                                </button>

                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="ml-3 bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right text-xl font-bold">
                        Total: ₹{totalPrice.toFixed(2)}
                    </div>

                </div>
            )}
        </div>
    );
}