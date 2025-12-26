import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xl mb-3">
            🔐
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Login to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-red-500
                         text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-red-500
                         text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Extra options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>

            <a
              href="#"
              className="text-red-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
