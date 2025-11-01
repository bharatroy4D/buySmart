import React from "react";

const ShopCart = ({ cartItems = [], onClose }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className=" flex justify-center items-start pt-20 ">
      <div className="bg-white w-11/12 sm:w-96 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
          <h2 className="font-bold text-lg text-gray-800">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-purple-600 text-xl font-semibold"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="max-h-80 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              Your cart is empty 🛍️
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md border"
                />
                <div className="flex-1 px-3">
                  <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold text-purple-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t px-6 py-4 bg-gray-50 rounded-b-xl">
            <div className="flex justify-between mb-3">
              <span className="font-medium text-gray-700 text-base">Total:</span>
              <span className="font-bold text-purple-600 text-base">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
