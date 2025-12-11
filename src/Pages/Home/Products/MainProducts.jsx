import React, { useEffect, useState } from "react";
import { FiFilter, FiArrowDown, FiArrowUp } from "react-icons/fi";

const MainProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter by category
  const filteredProducts =
    category === "All Categories"
      ? products
      : products.filter((product) => product.category === category);

  // Sort by price
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
      {/* --------------------- MOBILE SORT & FILTER --------------------- */}
      <div className="flex items-center justify-between gap-4 mb-4 lg:hidden">
        {/* Sort Button */}
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
          className="flex items-center gap-1 px-3 py-1 border rounded-lg hover:bg-gray-100 transition"
        >
          <span className="text-sm font-medium">Sort by Price</span>
          {sortOrder === "asc" ? (
            <FiArrowUp className="text-lg" />
          ) : (
            <FiArrowDown className="text-lg" />
          )}
        </button>

        {/* Filter Button */}
        <button className="flex items-center gap-1 px-3 py-1 border rounded-lg hover:bg-gray-100 transition">
          <FiFilter className="text-lg" />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>

      {/* --------------------- PRODUCT GRID --------------------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.slice(0, 12).map((product) => (
          <div
            key={product.id}
            className="group rounded-xl bg-white border border-gray-100 
                       shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-gray-50 rounded-t-xl">
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-40 object-contain p-4 
                           transition-transform duration-300 
                           group-hover:scale-105"
              />

              <span className="absolute top-2 right-2 bg-green-600 
                               text-white text-[11px] px-2 py-1 rounded">
                -{product.discount}% OFF
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col h-[150px]">
              <h3 className="text-sm font-medium text-gray-800 leading-tight">
                {product.name.length > 20
                  ? product.name.slice(0, 20) + "..."
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
          </div>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      )}
    </div>
  );
};

export default MainProducts;
