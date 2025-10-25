import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h4 className="text-purple-600 font-semibold uppercase tracking-wide mb-3">
            Best Deals of the Season
          </h4>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Shop Smart, <br /> Save Big with <span className="text-purple-600">BuySmart</span>
          </h1>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 mb-6">
            Discover the latest gadgets, fashion, and lifestyle products — all at the best prices.
            Upgrade your shopping experience today!
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Shop Now
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://i.ibb.co/TTRzqvQ/ecommerce-banner.png"
            alt="Shopping Banner"
            className="w-full max-w-md md:max-w-lg drop-shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
