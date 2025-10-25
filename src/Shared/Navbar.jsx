import React, { useState } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-purple-600 tracking-wide cursor-pointer hover:text-purple-800 transition-colors">
                    BuySmart
                </h1>

                {/* Search Bar (hidden on mobile) */}
                <div className="hidden md:flex flex-1 mx-6 max-w-md">
                    <input
                        type="text"
                        placeholder="What are you looking for..."
                        className="w-full text-gray-700 border bg-gray-100 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-transparent"
                    />
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    <Link to={'/selectCart'}>
                        <CiShoppingCart className="text-3xl text-gray-700 hover:bg-gray-100 rounded-full p-1 hover:text-purple-600 cursor-pointer transition-colors" />
                    </Link>
                    <FiUser className="text-3xl text-gray-700 hover:bg-gray-100 rounded-full p-1 hover:text-purple-600 cursor-pointer transition-colors" />
                    <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer transition-colors">
                        Register
                    </button>

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
                <div className="md:hidden mt-3 space-y-3 bg-gray-50 rounded-lg shadow p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full text-gray-700 border bg-gray-100 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-transparent"
                    />
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Register
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
