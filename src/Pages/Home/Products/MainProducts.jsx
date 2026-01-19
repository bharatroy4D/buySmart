import React, { useEffect, useState } from "react";
import { FiFilter, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts =
    category === "All Categories"
      ? products
      : products.filter((p) => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="w-full md:w-[80%] mx-auto">
      {/* ---------------- Mobile Sort & Filter ---------------- */}
      <div className="flex items-center justify-between gap-4 mb-5 lg:hidden">
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
          className="flex items-center gap-2 px-4 py-2 border rounded-lg
                     text-sm font-medium hover:bg-gray-100 transition"
        >
          Sort by Price
          {sortOrder === "asc" ? (
            <FiArrowUp className="text-base" />
          ) : (
            <FiArrowDown className="text-base" />
          )}
        </button>

        <button
          className="flex items-center gap-2 px-4 py-2 border rounded-lg
                     text-sm font-medium hover:bg-gray-100 transition"
        >
          <FiFilter className="text-base" />
          Filter
        </button>
      </div>

      {/* ---------------- Product Grid ---------------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.slice(0, 12).map((product) => (
          <Link
            key={product.id}
            to={`/productView/${product.id}`}
            className="group bg-white border border-gray-100 rounded-xl
                       overflow-hidden shadow-sm hover:shadow-lg
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="relative bg-gray-50 p-5 flex items-center justify-center ">
              <img
                src={product.images}
                alt={product.name}
                className="h-32 object-contain transition-transform  duration-300
                           group-hover:scale-105"
              />
              <span
                className="absolute top-2 right-2 bg-green-600 text-white
                           text-[11px] font-medium px-2 py-1 rounded"
              >
                -{product.discount}% OFF
              </span>
            </div>
            {/* Content */}
            <div className="p-4 flex flex-col ">
              <h3 className="text-sm font-semibold text-gray-800 pb-2 leading-tight">
                {product.name.length > 22
                  ? product.name.slice(0, 22) + "..."
                  : product.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto pt-3 flex items-center justify-between">
                <p className="text-green-700 font-semibold text-sm">
                  ${product.price}
                </p>

                <p className="text-yellow-500 text-xs font-medium">
                  ⭐ {product.rating}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No products found
        </p>
      )}
    </div>
  );
};

export default MainProducts;
