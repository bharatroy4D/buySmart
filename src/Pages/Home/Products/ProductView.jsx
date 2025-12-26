import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product load error:", err);
        setLoading(false);
      });
  }, [id]);

  // 🔹 Loading State
  if (loading) {
    return (
      <p className="text-center py-24 text-gray-500">
        Loading product...
      </p>
    );
  }

  // 🔹 Product Not Found
  if (!product) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 mb-4">
          Product not found
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-green-600 text-sm hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-green-600 hover:underline"
      >
        ← Back to products
      </button>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-[360px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500 text-lg">
              ⭐ {product.rating}
            </span>
            <span className="text-xs text-gray-400">
              (120 reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-center gap-4">
            <p className="text-2xl font-bold text-green-700">
              ${product.price}
            </p>
            {product.discount && (
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Static Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>✔ In stock & ready to ship</p>
            <p>✔ Free delivery within 3–5 days</p>
            <p>✔ Cash on delivery available</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              className="px-8 py-3 bg-green-600 text-white rounded-lg
                         hover:bg-green-700 transition"
            >
              Add to Cart
            </button>

            <button
              className="px-8 py-3 border border-gray-300 rounded-lg
                         hover:bg-gray-100 transition"
            >
              Buy Now
            </button>
          </div>

          {/* Service Info */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 border rounded-lg p-3">
              <FiTruck className="text-green-600 text-lg" />
              <span className="text-xs text-gray-600">
                Fast Delivery
              </span>
            </div>

            <div className="flex items-center gap-3 border rounded-lg p-3">
              <FiShield className="text-green-600 text-lg" />
              <span className="text-xs text-gray-600">
                Secure Payment
              </span>
            </div>

            <div className="flex items-center gap-3 border rounded-lg p-3">
              <FiRefreshCw className="text-green-600 text-lg" />
              <span className="text-xs text-gray-600">
                Easy Return
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-3">
          Product Details
        </h2>

        <p className="text-gray-600 leading-relaxed">
          This product is crafted with premium quality materials to
          ensure durability, comfort, and long-lasting performance.
          It is suitable for daily use and designed to meet modern
          lifestyle needs. Perfect choice for both personal use and
          gifting.
        </p>
      </div>
    </div>
  );
};

export default ProductView;
