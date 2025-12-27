import React, { useEffect, useState } from "react";

// Single Product Card
const ProductCard = ({ item }) => {
  return (
    <div className="bg-white border border-gray-300 rounded p-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-32 object-contain mb-2 rounded-md"
      />
      <p className="text-sm text-gray-700 truncate">{item.title}</p>
      <p className="text-green-600 text-sm font-semibold">{item.discount}</p>
    </div>
  );
};

// Category Section
const CategorySection = ({ category, products }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{category}</h2>
        <span className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
          →
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const CategoryCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/CategoryProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">
      {loading ? (
        [...Array(3)].map((_, i) => (
          <div key={i} className="h-72 bg-gray-200 rounded-lg animate-pulse" />
        ))
      ) : (
        categories.map((category, idx) => (
          <CategorySection
            key={idx}
            category={category}
            products={products
              .filter((p) => p.category === category)
              .slice(0, 4)} // show 4 items per category
          />
        ))
      )}
    </div>
  );
};

export default CategoryCards;
