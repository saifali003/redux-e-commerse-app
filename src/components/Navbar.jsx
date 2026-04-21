import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearch } from "../feature/searchSlice";
export default function Navbar() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Link
                    to="/"
                    className="text-xl font-bold text-blue-600"
                >
                    E-Commerce
                </Link>
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex items-center gap-6 font-medium">
                    <Link className="hover:text-blue-500" to="/">Home</Link>
                    <Link
                        className="relative hover:text-blue-500"
                        to="/cart"
                    >
                        Cart
                        <span className="ml-1 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">
                            {items.length}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}