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
    <div className="top-deals px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Top Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className=" rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={product.images}
              alt={product.name}
              className="w-64 h-52 object-content mb-3 rounded"
            />
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
