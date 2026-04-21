import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
export default function Home() {
    const [products, setProducts] = useState([]);
    const searchQuery = useSelector((state) => state.search.query);
    const fetchData = async () => {
        try {
            const result = await axios.get("https://fakestoreapi.com/products");
            setProducts(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
    );
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
}