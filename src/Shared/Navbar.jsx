import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      {/* 🔴 TOP NAVBAR WITH SEARCH BAR */}
      <nav className="bg-red-400 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-5 py-4">

          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-3xl font-bold text-white tracking-wide"
            >
              Shopzen
            </Link>

            {/* Desktop Icons (Right Side) */}
            <div className="hidden md:flex items-center gap-6 text-white">
              <Link
                to="/shopCart"
                className="flex items-center gap-1.5"
              >
                <MdOutlineShoppingCart className="text-3xl p-1" />
                <span className="text-sm font-medium">Cart</span>
              </Link>

              <Link
                to="/becomeSeller"
                className="flex items-center gap-1.5"
              >
                <FaStore className="text-3xl p-1" />
                <span className="text-sm font-medium">Become a Seller</span>
              </Link>

              <Link
                to="/login"
                className="flex items-center gap-2"
              >
                <FaRegUserCircle className="text-xl" />
                <span className="text-sm font-medium">Login</span>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="What are you looking for..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-gray-100 px-4 py-3 pr-12 rounded-lg text-gray-800
                         focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="absolute right-0 top-0 h-full w-12 bg-blue-700 rounded-r-lg flex items-center justify-center">
              <CiSearch className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔵 BOTTOM FIXED ICON MENU (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 py-2">
        <div className="flex justify-around items-center">

          <Link to="/" className="flex flex-col items-center text-gray-700">
            <CiSearch className="text-2xl" />
            <span className="text-xs mt-1">Search</span>
          </Link>

          <Link to="/shopCart" className="flex flex-col items-center text-gray-700">
            <MdOutlineShoppingCart className="text-2xl" />
            <span className="text-xs mt-1">Cart</span>
          </Link>

          <Link to="/becomeSeller" className="flex flex-col items-center text-gray-700">
            <FaStore className="text-2xl" />
            <span className="text-xs mt-1">Seller</span>
          </Link>

          <Link to="/login" className="flex flex-col items-center text-gray-700">
            <FaRegUserCircle className="text-2xl" />
            <span className="text-xs mt-1">Login</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
