import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(email, password)
      setUser(result.user);
      console.log(result);
      alert("registration successful ")
    } catch (error) {
      console.log('register error', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 lg:px-0">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">

        {/* ---------------- Left Side Graphic / Welcome ---------------- */}
        <div className="hidden lg:flex lg:w-1/2 bg-green-50 justify-center items-center rounded-l-3xl">
          <div className="text-center px-6">
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-3xl mb-6">
              ✨
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Join Us
            </h2>
            <p className="text-gray-600 text-lg">
              Create your account and start your journey today
            </p>
          </div>
        </div>

        {/* ---------------- Right Side Form ---------------- */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-center">

          {/* Header for Mobile */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">
              ✨
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-500 mt-1 text-sm">
              Please fill in the details to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">


            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-green-500
                           text-gray-900 placeholder-gray-400 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-green-500
                           text-gray-900 placeholder-gray-400 transition"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-green-500
                           text-gray-900 placeholder-gray-400 transition"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-xl
                         font-semibold text-lg hover:bg-green-600
                         transition duration-300 shadow-md"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
