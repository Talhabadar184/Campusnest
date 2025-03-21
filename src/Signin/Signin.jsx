import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate & Link
import InputField from "../components/Inputfield"; // Importing InputField Component
import logo from "../assets/Signin/logo.png"; // Importing logo

const SignIn = () => {
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", formData.userId, "Password:", formData.password);

    // Navigate to Home Page after successful sign-in
    navigate("/home");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Logo */}
      <img src={logo} alt="CampusNest Logo" className="w-28 mb-4" />

      {/* Sign In Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[37vw] border-2 border-gray-500 flex flex-col">
        <h2 className="text-blue-800 text-xl font-semibold mb-6">SIGN IN</h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          {/* Wrapping Input Fields in a div to control width */}
          <div className="w-[22vw] flex flex-col justify-center gap-4">
            <InputField
              label="User ID"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your User ID"
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-[19vw] text-white bg-blue-900 px-4 py-2 rounded-md hover:cursor-pointer hover:text-[18px]"
            >
              SIGN IN
            </button>
          </div>
        </form>

        {/* Forgot Password & Signup Links */}
        <div className="text-center mt-4">
          <Link to="/ForgotPassword" className="text-blue-600 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>

        <p className="text-gray-700 text-sm mt-2 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 text-sm hover:underline">
            Sign up today!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
