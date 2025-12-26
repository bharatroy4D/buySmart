import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container px-5 mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-6">Top Deals</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {products.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            to={`/productView/${product.id}`}
            className="block"
          >
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <div className="flex justify-center">
                <img
                  src={product.images}
                  alt={product.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-md"
                />
              </div>

              <p className="text-sm text-center mt-2 font-medium line-clamp-1">
                {product.name}
              </p>

              <p className="text-center text-green-600 font-bold text-sm mt-1">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
