import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryCardView = ({ Footer }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 mb-4">Product data not available</p>
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
    <div className="flex max-w-6xl mx-auto flex-col min-h-screen ">
      {/* Main Container */}
      <div className="flex-1 container mx-auto px-5 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-green-600 hover:underline"
        >
          ← Back to products
        </button>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl ">
          {/* Image Section */}
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
            <img
              src={state.image}
              alt={state.title}
              className="w-full h-[360px] object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {state.title}
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Brand: <span className="font-medium">{state.brand}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-500 text-lg">⭐ {state.rating}</span>
              <span className="text-xs text-gray-400">
                ({state.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-4">
              <p className="text-2xl font-bold text-green-700">
                ${state.price}
              </p>
              <span className="line-through text-gray-400">
                ${state.oldPrice}
              </span>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {state.discount}
              </span>
            </div>

            {/* Stock */}
            <p className="text-sm mt-3 text-gray-600">
              Availability:{" "}
              <span
                className={`font-medium ${
                  state.stock === "In Stock" ? "text-green-600" : "text-red-500"
                }`}
              >
                {state.stock}
              </span>
            </p>

            {/* Features */}
            {state.features && (
              <div className="mt-4">
                <h3 className="font-medium mb-2 text-gray-700">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600 max-h-36 overflow-y-auto pr-2">
                  {state.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Add to Cart
              </button>
              <button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Static Product Details Section */}
        <div className="  p-6 rounded-2xl ">
          <h2 className="text-xl font-semibold mb-3">Product Details</h2>
          <p className="text-gray-600 leading-relaxed">
            This product is crafted with premium quality materials to ensure
            durability, comfort, and long-lasting performance. It is suitable
            for daily use and designed to meet modern lifestyle needs. Perfect
            choice for both personal use and gifting. Detailed craftsmanship
            and thoughtful design make it a must-have item for everyday
            convenience and style.
            durability, comfort, and long-lasting performance. It is suitable
            for daily use and designed to meet modern lifestyle needs. Perfect
            choice for both personal use and gifting. Detailed craftsmanship
            and thoughtful design make it a must-have item 
         
          </p>
        </div>
      </div>

      {/* Footer */}
      {Footer && <Footer />}
    </div>
  );
};

export default CategoryCardView;
