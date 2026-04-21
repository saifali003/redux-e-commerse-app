import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";
export default function ProductCard({ item }) {
    const dispatch = useDispatch();
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <img
                src={item.image}
                alt={item.title}
                className="h-48 object-contain mb-3"
            />
            <h1 className="font-semibold text-sm line-clamp-2">
                {item.title}
            </h1>
            <p className="text-lg font-bold text-green-600 mt-2">
                ₹{item.price}
            </p>
            <button
                onClick={() => dispatch(addToCart(item))}
                className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Add To Cart
            </button>
        </div>
    );
}