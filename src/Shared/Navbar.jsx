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
    <>
      {/* Top Navbar */}
      <nav className="bg-red-400 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">

          {/* Logo (Desktop) */}
          <Link to="/" className="hidden lg:block text-3xl font-bold text-white tracking-wide">
            Shopzen
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full text-gray-800 bg-gray-100 px-4 py-3 pr-12 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="absolute right-0 top-0 h-full w-12 bg-blue-700 rounded-r-lg flex items-center justify-center">
              <CiSearch className="text-white text-2xl" />
            </button>
          </div>

          {/* Right Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-white">
            <Link
              to="/shopCart"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <MdOutlineShoppingCart className="text-3xl p-1" />
              <span className="text-sm font-medium">Cart</span>
            </Link>

            <Link
              to="/becomeSeller"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <FaStore className="text-3xl p-1" />
              <span className="text-sm font-medium">Become a Seller</span>
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <FaRegUserCircle className="text-xl" />
              <span className="text-sm font-medium">Login</span>
            </Link>
          </div>

          {/* Mobile Search (Top) */}
          <div className="lg:hidden flex-1 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 bg-gray-100 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <CiSearch className="absolute right-4 top-3 text-2xl text-gray-500" />
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="lg:hidden ml-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-white"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div> */}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-50 px-5 pb-4 space-y-4 shadow-lg">
            <Link
              to="/shopCart"
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-red-500 transition"
            >
              <MdOutlineShoppingCart className="text-xl" />
              Cart
            </Link>

            <Link
              to="/becomeSeller"
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-red-500 transition"
            >
              <FaStore className="text-xl" />
              Become a Seller
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-red-500 transition"
            >
              <FaRegUserCircle className="text-lg" />
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* ------------------------------------------------------------- */}
      {/*      🔥 Bottom Fixed Mobile Navbar (Always visible)           */}
      {/* ------------------------------------------------------------- */}

      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex items-center justify-around px-6 py-2 z-50">

        <Link to="/" className="flex flex-col items-center text-gray-700">
          <FiMenu className="text-2xl" />
          <span className="text-xs">Menu</span>
        </Link>

        <Link to="/shopCart" className="flex flex-col items-center text-gray-700">
          <MdOutlineShoppingCart className="text-2xl" />
          <span className="text-xs">Cart</span>
        </Link>

        <Link to="/becomeSeller" className="flex flex-col items-center text-gray-700">
          <FaStore className="text-2xl" />
          <span className="text-xs">Seller</span>
        </Link>

        <Link to="/login" className="flex flex-col items-center text-gray-700">
          <FaRegUserCircle className="text-2xl" />
          <span className="text-xs">Login</span>
        </Link>

      </div>
    </>
  );
};

export default Navbar;
