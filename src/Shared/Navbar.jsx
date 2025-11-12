import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaStore, FaUserTie } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-800 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white tracking-wide transition-colors">
          Shopzen
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-md relative">
          <input
            type="text"
            placeholder="What are you looking for..."
            className="w-full text-gray-800 bg-gray-100 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="absolute right-0 top-0 h-full w-12 bg-green-500 rounded-r-lg flex items-center justify-center cursor-pointer">
            <CiSearch className="text-white text-2xl" />
          </div>
        </div>


        {/* Right Icons */}
        <div className="flex items-center text-white gap-5">
          <Link to="/shopCart" className="flex items-center gap-1.5">
            <MdOutlineShoppingCart className="text-3xl hover:bg-gray-100 rounded-full p-1 hover:text-purple-600 cursor-pointer" />
            <span className="">Cart</span>
          </Link>

          <Link to={'/seller'} className="flex items-center gap-1.5">
            <FaStore className="text-3xl hover:bg-gray-100 rounded-full p-1 hover:text-purple-600 " />
            <span className="">Become a Seller</span>
          </Link>
          <Link to="/register">
            <button
              className="
              bg-purple-600 
              text-white 
              px-4 py-2 
              rounded-lg 
              hover:bg-purple-700
              focus:outline-none
              hidden md:block
    "
            >
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
