import React, { useEffect, useState } from "react";

const TopDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="top-deals">
      <h2 className="text-2xl font-bold mb-4">Top Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={product.img[0]}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{product.description}</p>
            <p className="font-bold text-blue-600">
              ${product.price}{" "}
              <span className="text-red-500">
                {product.discount}% off
              </span>
            </p>
            <p className="text-yellow-500">Rating</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
