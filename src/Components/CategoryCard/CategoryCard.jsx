import React, { useEffect, useState } from "react";

const CategoryCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/CategoryProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {categories.map((category, idx) => (
        <div key={idx}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{category}</h2>
            <span className="text-blue-600 cursor-pointer">→</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {products
              .filter((p) => p.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg p-3 hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-contain rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="text-green-600 text-sm font-semibold">
                    {item.discount}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
