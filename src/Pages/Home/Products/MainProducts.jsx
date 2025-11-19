import React, { useEffect, useState } from "react";

const MainProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-lg font-medium text-green-600">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[75%]">
      <h2 className="text-xl font-semibold mb-5">All Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-sm p-3 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={product.images}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>

            <p className="text-[13px] text-gray-500 mt-1 line-clamp-2">
              {product.description}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-green-600 font-bold text-sm">
                ${product.price}
              </p>

              <p className="text-xs text-orange-500 font-medium">
                -{product.discount}% OFF
              </p>
            </div>

            <p className="text-yellow-500 text-sm mt-1">
              ⭐ {product.rating}
            </p>

            <button className="mt-3 w-full py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
