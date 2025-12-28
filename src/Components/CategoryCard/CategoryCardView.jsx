import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryCardView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <p className="text-center mt-20 text-red-500">
        Product data not available
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Products
      </button>

      {/* Product Main Card */}
      <div className="grid lg:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
        
        {/* Image Section */}
        <div className="flex justify-center items-center bg-gray-50 p-6 rounded-lg">
          <img
            src={state.image}
            alt={state.title}
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{state.title}</h1>
          <p className="text-gray-500 text-sm mb-2">
            Brand: <span className="font-medium">{state.brand}</span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded">
              ★ {state.rating}
            </span>
            <span className="text-gray-500 text-sm">
              ({state.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-green-600">
              ${state.price}
            </span>
            <span className="line-through text-gray-400">
              ${state.oldPrice}
            </span>
            <span className="text-red-500 font-medium">{state.discount}</span>
          </div>

          {/* Stock */}
          <p className="text-sm mb-4">
            Availability:{" "}
            <span
              className={`font-medium ${
                state.stock === "In Stock" ? "text-green-600" : "text-red-500"
              }`}
            >
              {state.stock}
            </span>
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {state.description}
          </p>

          {/* Features */}
          {state.features && (
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-gray-700">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {state.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardView;
