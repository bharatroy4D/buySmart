import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600 tracking-wide cursor-pointer hover:text-purple-800 transition-colors">
          BuySmart
        </h1>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Right Icons & Button */}
        <div className="flex items-center gap-4">
          <CiShoppingCart className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
          <FiUser className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
