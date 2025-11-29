import React from "react";

const BecomeSeller = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Seller & Grow Your Business
          </h1>

          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Start selling to millions of customers and scale your brand with
            our trusted eCommerce platform.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 duration-300">
              Register Now
            </button>
            <button className="border border-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-blue-700 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sell With Us?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Reach Millions of Customers",
            "Fast & Secure Payments",
            "Easy Seller Dashboard",
            "24/7 Seller Support",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border duration-300"
            >
              <div className="text-blue-600 text-4xl font-bold">✓</div>
              <h3 className="text-xl font-semibold mt-3">{text}</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

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
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg duration-300"
              >
                <div className="text-4xl text-blue-600 font-bold mb-2">
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold">{step}</h4>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Required Documents
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
          {[
            "NID / Passport / Driving License",
            "Phone Number",
            "Bank Account",
            "Shop / Brand Details",
          ].map((doc, i) => (
            <p key={i} className="flex items-center gap-3 mb-3 text-lg">
              <span className="text-green-600 font-bold">✓</span> {doc}
            </p>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Selling?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Join thousands of sellers already growing their business with us.
        </p>

        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 duration-300">
          Become a Seller Now
        </button>
      </section>
    </div>
  );
};

export default BecomeSeller;
