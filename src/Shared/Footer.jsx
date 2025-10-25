import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-purple-600 mb-3">BuySmart</h1>
          <p className="text-gray-400 text-sm">
            BuySmart is your one-stop destination for electronics, gadgets, and accessories. We provide the best quality products with excellent customer service.
          </p>
          <div className="flex mt-4 gap-3">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Customer Service</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Payment Options</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">Get the latest updates and offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-r-lg text-white hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BuySmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
