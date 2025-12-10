import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h1 className="text-3xl font-bold text-purple-600 mb-4">ShopZen</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            BuySmart is your one-stop destination for electronics, gadgets, and accessories. We provide the best quality products with excellent customer service.
          </p>
          <div className="flex mt-5 gap-3">
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">Contact</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-4 text-lg">Customer Service</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">Payment Options</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-4 text-lg">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Get the latest updates and exclusive offers.
          </p>
          <div className="flex rounded-lg overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <button className="bg-purple-600 px-5 py-2 text-white font-semibold hover:bg-purple-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BuySmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
