import React from "react";

const ShopCart = ({ cartItems = [], onClose }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex justify-center items-start  p-4">
      <div className="bg-white container mx-auto max-w-5xl h-screen  rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b bg-gray-50">
          <h2 className="font-bold text-2xl text-gray-900">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-purple-600 text-2xl font-semibold transition"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="max-h-[500px] overflow-y-auto px-8 py-6 space-y-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-20 text-lg">
              Your cart is empty 🛍️
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div className="flex-1 px-4">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold text-purple-600 text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t px-8 py-6 bg-gray-50 rounded-b-2xl space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span className="font-bold text-purple-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
