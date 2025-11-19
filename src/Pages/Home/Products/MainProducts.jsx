import React, { useEffect, useState } from "react";

const MainProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-lg font-medium text-green-600">Loading products...</p>
      </div>
    );
  }

  // Category Filter
  const filteredProducts =
    category === "All Categories"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="w-full md:w-[80%]">
      <h2 className="text-xl font-semibold mb-5">{category}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
              />

              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-lg">
                -{product.discount}% OFF
              </span>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-600">
                {product.name}
              </h3>

              <p className="text-[13px] text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-green-700 font-bold text-sm">${product.price}</p>
                <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
