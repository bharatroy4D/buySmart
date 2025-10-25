import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

const SelectCart = () => {
  // 🛍️ Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      qty: 1,
      img: "https://i.ibb.co/ThsZbmn/headphone.webp",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 39.99,
      qty: 2,
      img: "https://i.ibb.co/2txgV4K/watch.webp",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="relative">
      {/* 🛒 Cart Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        <CiShoppingCart className="text-3xl text-gray-700 hover:text-purple-600 transition-colors" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
            {totalItems}
          </span>
        )}
      </div>

      {/* 🧺 Dropdown Cart */}
      {isOpen && (
        <div className="absolute right-0 mt-4 w-96 bg-white shadow-2xl rounded-xl border border-gray-200 z-50">
          {/* Header */}
          <div className="px-5 py-4 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
            <h3 className="font-semibold text-gray-800 text-lg">🛍️ Your Cart</h3>
            <span className="text-sm text-gray-500">{totalItems} items</span>
          </div>

          {/* Cart Items */}
          <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-all duration-150 border-b last:border-none"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Qty: {item.qty} × ${item.price}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-purple-600">
                    ${(item.qty * item.price).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Your cart is empty 🛒
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t px-5 py-4 bg-gray-50 rounded-b-xl">
              <div className="flex justify-between items-center mb-3">
                <p className="text-gray-700 font-medium text-base">Total</p>
                <p className="text-purple-600 font-semibold text-base">
                  $
                  {cartItems
                    .reduce((sum, item) => sum + item.price * item.qty, 0)
                    .toFixed(2)}
                </p>
              </div>
              <button className="w-full bg-purple-600 text-white py-2.5 rounded-lg hover:bg-purple-700 transition font-medium shadow-sm">
                View Cart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectCart;
