import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-800 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-purple-600 tracking-wide hover:text-purple-800 transition-colors">
          Smart
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-md relative">
          <input
            type="text"
            placeholder="What are you looking for..."
            className="w-full text-gray-800 bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Link to="/shopCart">
            <MdOutlineShoppingCart className="text-3xl text-gray-700 hover:bg-gray-100 rounded-full p-1 hover:text-purple-600 cursor-pointer transition-colors" />
          </Link>

          <FiUser className="text-3xl text-gray-700 hover:bg-gray-100 rounded-full p-1 hover:text-purple-600 cursor-pointer transition-colors" />

          <Link to="/register">
            <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Register
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 bg-gray-50 rounded-lg shadow-lg p-4 animate-slideDown">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-gray-700 border bg-gray-100 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Link to="/register">
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Register
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
