import React, { useEffect, useState } from "react";
import { FiFilter, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts =
    category === "All Categories"
      ? products
      : products.filter((p) => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-lg font-medium text-green-600">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[80%] mx-auto">
      {/* Mobile Sort */}
      <div className="flex justify-between mb-4 lg:hidden">
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
          className="flex items-center gap-1 px-3 py-1 border rounded-lg"
        >
          Sort by Price
          {sortOrder === "asc" ? <FiArrowUp /> : <FiArrowDown />}
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border rounded-lg">
          <FiFilter /> Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.slice(0, 12).map((product) => (
          <Link
            key={product.id}
            to={`/productView/${product.id}`}
            className="group rounded-xl bg-white border shadow-sm hover:shadow-lg transition"
          >
            <div className="bg-gray-50 rounded-t-xl p-4">
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-40 object-contain group-hover:scale-105 transition"
              />
              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </span>
            </div>

            <div className="p-4 h-[150px] flex flex-col">
              <h3 className="text-sm font-medium">
                {product.name.slice(0, 20)}...
              </h3>

              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto flex justify-between">
                <p className="text-green-700 font-semibold">
                  ${product.price}
                </p>
                <p className="text-yellow-500 text-xs">
                  ⭐ {product.rating}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No products found
        </p>
      )}
    </div>
  );
};

export default MainProducts;
