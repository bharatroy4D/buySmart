import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return (
      <p className="text-center py-20 text-gray-500">
        Loading product...
      </p>
    );
  }

  return (
    <div className="container mx-auto px-5 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-600 hover:underline"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-6 rounded-xl">
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-[350px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-3">
            {product.description}
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <p className="text-xl font-bold text-green-700">
              ${product.price}
            </p>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
              {product.discount}% OFF
            </span>
          </div>

          <p className="mt-3 text-yellow-500">
            ⭐ {product.rating}
          </p>

          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
