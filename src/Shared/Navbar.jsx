import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-wide"
        >
          Shopzen
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <input
            type="text"
            placeholder="What are you looking for..."
            className="w-full text-gray-800 bg-gray-100 px-4 py-3 pr-12 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="absolute right-0 top-0 h-full w-12 bg-blue-700 rounded-r-lg flex items-center justify-center">
            <CiSearch className="text-white text-2xl" />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-white">
          <Link
            to="/shopCart"
            className="hidden md:flex items-center gap-1.5"
          >
            <MdOutlineShoppingCart className="text-3xl p-1" />
            <span className="text-sm font-medium">Cart</span>
          </Link>

          <Link
            to="/becomeSeller"
            className="hidden md:flex items-center gap-1.5"
          >
            <FaStore className="text-3xl p-1" />
            <span className="text-sm font-medium">
              Become a Seller
            </span>
          </Link>

          <Link to="/login" className="hidden md:flex items-center gap-2">
            <FaRegUserCircle className="text-xl" />
            <span className="text-sm font-medium">
              Login
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-white"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-5 pb-4 space-y-4 shadow-lg">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 bg-gray-100 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <CiSearch className="absolute right-4 top-3 text-2xl text-gray-500" />
          </div>

          {/* Mobile Links */}
          <Link
            to="/shopCart"
            className="flex items-center gap-2 text-gray-700 font-medium"
          >
            <MdOutlineShoppingCart className="text-xl" />
            Cart
          </Link>

          <Link
            to="/becomeSeller"
            className="flex items-center gap-2 text-gray-700 font-medium"
          >
            <FaStore className="text-xl" />
            Become a Seller
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-700 font-medium"
          >
            <FaRegUserCircle className="text-lg" />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
