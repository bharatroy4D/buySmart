import React from "react";

const BecomeSeller = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-500 text-white py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Become a Seller & Grow Your Business
          </h1>

          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Start selling to millions of customers and scale your brand
            with our trusted eCommerce marketplace.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-red-700 px-7 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 duration-300">
              Register Now
            </button>
            <button className="border border-white px-7 py-3 font-semibold rounded-lg hover:bg-white hover:text-red-700 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Sell With Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Reach Millions of Customers",
            "Fast & Secure Payments",
            "Easy Seller Dashboard",
            "24/7 Dedicated Support",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-xl shadow-sm hover:shadow-lg border transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-semibold mt-4">{text}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Grow your online business with powerful tools and
                seamless order management.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              "Create Account",
              "Upload Products",
              "Receive Orders",
              "Fast Delivery",
              "Get Paid",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-500 text-white font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold">{step}</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Simple steps to start selling online quickly.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Required Documents
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          {[
            "NID / Passport / Driving License",
            "Active Phone Number",
            "Valid Bank Account",
            "Shop or Brand Information",
          ].map((doc, i) => (
            <p
              key={i}
              className="flex items-center gap-3 mb-4 text-base"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                ✓
              </span>
              {doc}
            </p>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-500 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Ready to Start Selling?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Join thousands of trusted sellers and grow your business
          with our platform.
        </p>

        <button className="bg-white text-red-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Become a Seller Now
        </button>
      </section>
    </div>
  );
};

export default BecomeSeller;
