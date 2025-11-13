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
    <div className="container px-5 mx-auto py-6">
      <h2 className="text-2xl font-medium mb-6">Top Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 ">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className=" rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={product.images}
              alt={product.name}
              className="w-44 h-48 object-content mb-3 rounded"
            />
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
