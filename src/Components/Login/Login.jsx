import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleGoogleLogin = () => {
    googleLogin();
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(email, password)
      console.log(result);
    } catch (error) {
      console.log('login error', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 lg:px-0">
      <div className="w-full max-w-2xl lg:max-w-3xl bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col lg:flex-row overflow-hidden">

        {/* ----------------- Left Side (Graphic / Logo) ----------------- */}
        <div className="hidden lg:flex lg:w-1/2 bg-green-50 justify-center items-center rounded-l-3xl">
          <div className="text-center px-6">
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-3xl mb-6">
              🔐
            </div>
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
              Login
            </h2>
            <p className="text-gray-600 text-lg">
              Login to access your professional dashboard
            </p>
          </div>
        </div>

        {/* ----------------- Right Side (Form) ----------------- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8 py-6 lg:py-0">
          {/* Header for Mobile */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-2xl mb-4">
              🔐
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Login to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
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
                placeholder="you@example.com"
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

            {/* Extra options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-green-500" />
                Remember me
              </label>

              <a
                href="#"
                className="text-green-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl
                         font-semibold hover:bg-green-700 transition text-lg"
            >
              Login
            </button>
          </form>
          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 my-5 rounded-xl shadow-sm hover:bg-gray-50 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-gray-700 font-medium">Continue with Google</span>
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link to={'/register'} className="text-green-600 font-medium hover:underline">create account</Link>
            {/* <a
              href="/register"
              className="text-green-600 font-medium hover:underline"
            >
              Create Account
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
